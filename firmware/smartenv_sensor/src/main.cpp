#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiManager.h>

#define MQ135_PIN 34
#define PH_PIN 35
#define TDS_PIN 32
#define LED_PIN 2

const char* FIREBASE_HOST = "smartenvironmonitor-default-rtdb.firebaseio.com";
const char* FIREBASE_AUTH = "YOUR_FIREBASE_AUTH_KEY";

float pHValue = 0;
float tdsValue = 0;
float airQuality = 0;
float temperature = 0;
float humidity = 0;

unsigned long lastSendTime = 0;
const long sendInterval = 30000;

void setup() {
    Serial.begin(115200);
    pinMode(LED_PIN, OUTPUT);
    pinMode(MQ135_PIN, INPUT);
    pinMode(PH_PIN, INPUT);
    pinMode(TDS_PIN, INPUT);

    WiFiManager wifiManager;
    wifiManager.autoConnect("SmartEnv-Setup");
    
    Serial.println("Connected to WiFi");
    Serial.println(WiFi.localIP());
    
    digitalWrite(LED_PIN, HIGH);
}

float readMQ135() {
    int rawValue = analogRead(MQ135_PIN);
    float voltage = (rawValue / 4095.0) * 3.3;
    float ppm = map(rawValue, 0, 4095, 0, 1000);
    return ppm;
}

float readPH() {
    int rawValue = analogRead(PH_PIN);
    float voltage = (rawValue / 4095.0) * 3.3;
    float pH = 7 + ((2.5 - voltage) / 0.18);
    pH = constrain(pH, 0, 14);
    return pH;
}

float readTDS() {
    int rawValue = analogRead(TDS_PIN);
    float voltage = (rawValue / 4095.0) * 3.3;
    float tds = (133.42 * voltage * voltage * voltage 
                - 255.86 * voltage * voltage 
                + 857.39 * voltage) * 0.5;
    return tds;
}

void sendDataToFirebase(float air, float ph, float tds) {
    if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
        
        String url = "https://";
        url += FIREBASE_HOST;
        url += "/sensor_data.json?auth=";
        url += FIREBASE_AUTH;
        
        StaticJsonDocument<512> doc;
        doc["air_quality"] = air;
        doc["ph"] = ph;
        doc["tds"] = tds;
        doc["timestamp"] = millis();
        doc["station_id"] = "station_01";
        
        String jsonString;
        serializeJson(doc, jsonString);
        
        http.begin(url);
        http.addHeader("Content-Type", "application/json");
        
        int httpResponseCode = http.POST(jsonString);
        
        if (httpResponseCode > 0) {
            Serial.println("Data sent successfully");
            digitalWrite(LED_PIN, HIGH);
            delay(100);
            digitalWrite(LED_PIN, LOW);
        } else {
            Serial.println("Error sending data");
        }
        
        http.end();
    }
}

void loop() {
    unsigned long currentTime = millis();
    
    airQuality = readMQ135();
    pHValue = readPH();
    tdsValue = readTDS();
    
    Serial.print("Air Quality: ");
    Serial.print(airQuality);
    Serial.print(" | pH: ");
    Serial.print(pHValue);
    Serial.print(" | TDS: ");
    Serial.println(tdsValue);
    
    if (currentTime - lastSendTime >= sendInterval) {
        sendDataToFirebase(airQuality, pHValue, tdsValue);
        lastSendTime = currentTime;
    }
    
    delay(1000);
}
