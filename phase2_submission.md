# SmartEnv - IoT-Based Smart Water & Air Quality Monitoring System

**Team Name:** Code-x

**Team Leader:** Anirudh Yadav (+918795918369)

**Member:** Anand Maurya (+919935083474)

---

## 1. Problem Statement

India faces a severe environmental crisis with both water and air pollution reaching dangerous levels. According to the Central Pollution Control Board (CPCB), over 351 river stretches are polluted, and major cities regularly exceed WHO safe limits for air pollutants by 2-3 times.

### Current Challenges

- **Manual Testing:** Lab testing takes 24-72 hours, delaying response
- **High Cost:** Professional testing costs ₹2,000-5,000 per sample
- **Limited Coverage:** Rural areas lack any monitoring infrastructure
- **No Real-time Alerts:** Communities are unaware of pollution spikes

### Impact

- 37.7 million Indians affected by waterborne diseases annually
- Pollution costs India 2.9% of GDP (~$560 billion)
- Vulnerable communities bear disproportionate burden

---

## 2. Progress Made

### 2.1 Hardware Development

| Component | Status | Details |
|-----------|--------|---------|
| ESP32 Setup | Completed | WiFi + BLE configured, tested with basic sensors |
| Air Quality Sensors | Completed | MQ135 (CO2, NH3, NOx) calibrated and working |
| Water Quality Sensors | In Progress | pH and TDS sensors ordered, awaiting delivery |
| LoRa Module | Planned | For long-range rural deployment |

### 2.2 Software Development

| Component | Status | Details |
|-----------|--------|---------|
| Firebase Backend | Completed | Real-time database configured, data ingestion working |
| ESP32 Firmware | Completed | Sensor data collection and WiFi transmission working |
| React Dashboard | In Progress | UI framework set up, real-time data display partial |
| Alert System | Planned | SMS/Email integration pending |

### 2.3 Milestones Achieved

- [x] ESP32 reads air quality data (PM2.5, CO2)
- [x] Data transmits to Firebase in real-time
- [x] Firebase stores time-series data
- [x] Basic React dashboard displays live readings
- [x] GitHub repository set up with clean code structure
- [ ] Water quality sensor integration
- [ ] Threshold-based alert system
- [ ] Historical data visualization
- [ ] Mobile responsive design

---

## 3. Features Implemented

### 3.1 Completed Features

| Feature | Description |
|---------|-------------|
| **Real-time Data Collection** | ESP32 continuously reads sensor values every 30 seconds |
| **Cloud Data Storage** | Firebase Realtime Database stores all sensor readings |
| **Basic Dashboard** | Web interface shows current air quality readings |
| **Data Logging** | All readings stored with timestamps for historical analysis |

### 3.2 In-Progress Features

| Feature | Description | Progress |
|---------|-------------|----------|
| **Interactive Charts** | Line graphs for historical trends | 60% complete |
| **Color-coded Alerts** | Visual indicators for safe/warning/danger levels | 40% complete |
| **Multi-station Support** | Monitor multiple locations from one dashboard | 30% complete |

### 3.3 Demo Screenshots

*(Add screenshots here showing:)*

1. ESP32 serial monitor showing sensor readings
2. Firebase console showing real-time data
3. React dashboard with live data display

---

## 4. Technical Architecture

### 4.1 System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    SENSOR LAYER                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ MQ135    │  │  pH      │  │  TDS     │              │
│  │(Air)     │  │(Water)   │  │(Water)   │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
└───────┼──────────────┼──────────────┼───────────────────┘
        │              │              │
        ▼              ▼              ▼
┌─────────────────────────────────────────────────────────┐
│                 ESP32 MICROCONTROLLER                    │
│         (Data Collection + WiFi Transmission)            │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP/MQTT
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    FIREBASE CLOUD                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Realtime │  │ Auth     │  │ Hosting  │              │
│  │ Database │  │          │  │          │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  REACT DASHBOARD                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Live    │  │Historical│  │  Alert   │              │
│  │  Data    │  │  Charts  │  │  Panel   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Tech Stack

| Layer | Technology |
|-------|------------|
| Hardware | ESP32, MQ135, pH Sensor, TDS Sensor |
| Firmware | Arduino C++ |
| Backend | Firebase Realtime Database |
| Frontend | React.js, Tailwind CSS, Chart.js |
| Hosting | Firebase Hosting |

---

## 5. Challenges Faced

### 5.1 Technical Challenges

| Challenge | Impact | Solution |
|-----------|--------|----------|
| **Sensor Calibration** | Initial readings inaccurate | Researched calibration procedures, implemented offset corrections |
| **WiFi Stability** | ESP32 disconnects intermittently | Added auto-reconnect logic, implemented data buffering |
| **Firebase Latency** | Occasional delayed updates | Optimized database structure, reduced payload size |
| **Power Supply** | Sensors need stable voltage | Used separate 5V supply for sensors, added capacitors |

### 5.2 Resource Constraints

| Constraint | Mitigation |
|------------|------------|
| Limited budget (₹6,500) | Used cost-effective sensors, prioritized essential components |
| 2-person team | Divided responsibilities: Anirudh (Hardware), Anand (Software) |
| Time pressure (3 days) | Focused on MVP first, planned enhancements for Phase 3 |

### 5.3 Learning Curve

- Firebase real-time database queries
- ESP32 WiFi management and deep sleep modes
- Sensor data normalization and calibration
- React hooks for real-time data updates

---

## 6. Future Roadmap

### 6.1 Phase 3 (Final Submission - 1 September)

| Task | Priority | Owner |
|------|----------|-------|
| Complete water quality sensor integration | High | Anirudh |
| Implement threshold-based SMS/Email alerts | High | Both |
| Add historical data visualization | High | Anand |
| Mobile responsive design | Medium | Anand |
| Documentation and README | Medium | Both |
| Demo video recording | Medium | Both |

### 6.2 Post-Hackathon Enhancements

| Enhancement | Timeline | Impact |
|-------------|----------|--------|
| AI-based pollution prediction | 2-4 weeks | Proactive alerts |
| Mobile app (Flutter) | 1-2 months | Better accessibility |
| LoRa integration | 1 month | Rural deployment |
| Solar power option | 2 months | Off-grid capability |
| Multi-language support | 2 weeks | Wider reach |

### 6.3 Long-term Vision

- Integration with government CPCB monitoring network
- Citizen science platform for crowdsourced data
- Blockchain-based data integrity for regulatory compliance
- Drone-based sensor deployment for remote areas

---

## 7. Team & Responsibilities

| Role | Member | Responsibilities |
|------|--------|------------------|
| **Hardware Lead** | Anirudh Yadav | Sensor setup, ESP32 firmware, circuit design |
| **Software Lead** | Anand Maurya | Firebase backend, React dashboard, documentation |

---

## 8. Conclusion

SmartEnv addresses a critical environmental monitoring gap in India with an affordable, scalable IoT solution. Despite challenges with sensor calibration and resource constraints, we have successfully:

- Built a working prototype with air quality monitoring
- Established real-time cloud data storage
- Created a functional web dashboard

With continued development, SmartEnv has the potential to empower communities with real-time environmental data, enabling faster response to pollution events and contributing to a healthier India.

---

**Team Code-x**

**GitHub:** https://github.com/mauryaanand416/SmartEnv-IoT-Monitor

**Submission Date:** 27 August 2026

**Deadline:** 27 August 2026, 11:59 PM IST
