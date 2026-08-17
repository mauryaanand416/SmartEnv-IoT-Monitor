# SmartEnv - IoT-Based Smart Water & Air Quality Monitoring System

An affordable, scalable IoT solution for real-time environmental monitoring. Built for the Omnikon National Hackathon 2026 by Team Code-x.

**Live Demo:** https://inquisitive-faun-e38fad.netlify.app

## Features

- **Real-time Monitoring** - Live sensor data updates every 30 seconds
- **Multi-parameter Support** - Air Quality (PM2.5, CO2), Water Quality (pH, TDS)
- **Interactive Dashboard** - Color-coded gauges and historical trend charts
- **Threshold Alerts** - Visual alerts when parameters exceed safe limits
- **Mobile Responsive** - Access from any device

## Tech Stack

### Hardware
- ESP32 Microcontroller
- MQ135 Air Quality Sensor
- pH Sensor
- TDS Sensor

### Software
- **Firmware:** Arduino C++ (PlatformIO)
- **Backend:** Firebase Realtime Database
- **Frontend:** React.js, Tailwind CSS, Recharts
- **Hosting:** Firebase Hosting

## Project Structure

```
SmartEnv-IoT-Monitor/
├── firmware/
│   └── smartenv_sensor/
│       ├── src/main.cpp
│       └── platformio.ini
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SensorDashboard.js
│   │   │   ├── DataChart.js
│   │   │   └── AlertPanel.js
│   │   ├── hooks/
│   │   │   └── useSensorData.js
│   │   ├── config/
│   │   │   └── firebase.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── phase1_submission.pdf
├── phase2_submission.pdf
└── README.md
```

## Quick Start

### Hardware Setup

1. Connect sensors to ESP32:
   - MQ135: GPIO 34
   - pH Sensor: GPIO 35
   - TDS Sensor: GPIO 32

2. Install PlatformIO and flash firmware:
   ```bash
   cd firmware/smartenv_sensor
   pio run -t upload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your Firebase credentials

4. Start development server:
   ```bash
   npm start
   ```

### Firebase Setup

1. Create a new Firebase project
2. Enable Realtime Database
3. Create `sensor_data` node
4. Copy your Firebase config to `.env`

## API Endpoints

The system uses Firebase Realtime Database:

```
/sensor_data/{station_id}/
  ├── air_quality: number
  ├── ph: number
  ├── tds: number
  ├── timestamp: number
  └── station_id: string
```

## Deployment

### Deploy to Firebase Hosting

```bash
cd frontend
npm run build
firebase deploy
```

## Team

- **Anirudh Yadav** - Hardware Lead
- **Anand Maurya** - Software Lead

## License

This project is open source and available under the MIT License.


