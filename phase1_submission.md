# Smart Water & Air Quality Monitoring System Using IoT

**Team Name:** Code-x

**Team Leader:** Anirudh Yadav (+918795918369)

**Member:** Anand Maurya (+919935083474)

**Submission Date:** 18 August 2026

---

## 1. Problem Understanding

### 1.1 Background

India faces a severe environmental crisis with both water and air pollution reaching dangerous levels. According to the Central Pollution Control Board (CPCB), over 351 river stretches in India are polluted, and major cities regularly exceed WHO safe limits for air pollutants by 2-3 times.

### 1.2 Current Challenges

| Challenge | Description |
|-----------|-------------|
| **Manual Testing** | Current methods require lab testing, taking 24-72 hours for results |
| **High Cost** | Professional water/air testing costs ₹2,000-5,000 per sample |
| **Delayed Response** | By the time results arrive, contamination has already spread |
| **Limited Coverage** | Only major cities have monitoring stations; rural areas are ignored |
| **No Real-time Alerts** | Communities are unaware of pollution spikes until health issues arise |

### 1.3 Impact

- **Health:** Waterborne diseases affect 37.7 million Indians annually
- **Economy:** Pollution costs India 2.9% of GDP (~$560 billion)
- **Environment:** Ecosystem destruction, biodiversity loss
- **Social:** Vulnerable communities bear disproportionate burden

### 1.4 Target Users

- Municipal corporations and local bodies
- Industrial facilities (compliance monitoring)
- Residential communities and housing societies
- Agricultural sector (irrigation water quality)
- Environmental research organizations

---

## 2. Proposed Solution

### 2.1 Overview

We propose an **IoT-based Smart Environmental Monitoring System** that provides real-time, continuous monitoring of both water and air quality parameters. The system deploys low-cost sensor nodes at multiple locations, transmits data to a cloud platform, and presents insights through an interactive dashboard with automated alerts.

### 2.2 Key Components

1. **Sensor Nodes:** Deploy ESP32 microcontrollers with environmental sensors at monitoring locations
2. **Data Transmission:** Use WiFi/LoRa for wireless communication to cloud
3. **Cloud Backend:** Store, process, and analyze incoming sensor data
4. **Web Dashboard:** Real-time visualization with historical trends
5. **Alert System:** Automated notifications when parameters exceed safe thresholds
6. **Prediction Engine:** ML-based forecasting of pollution trends

### 2.3 How It Works

1. Sensors continuously measure water quality (pH, turbidity, TDS, dissolved oxygen) and air quality (PM2.5, PM10, CO2, NO2, SO2)
2. ESP32 collects data and sends it to cloud via WiFi/LoRa
3. Cloud backend processes and stores data in time-series database
4. Dashboard displays real-time readings with color-coded status
5. When thresholds are breached, alerts are sent via SMS/Email/Push notifications
6. Historical data is analyzed to predict future pollution trends

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SENSOR LAYER                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Water    │  │ Air      │  │ Water    │  │ Air      │       │
│  │ Station 1│  │ Station 1│  │ Station 2│  │ Station 2│       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│       │              │              │              │             │
└───────┼──────────────┼──────────────┼──────────────┼─────────────┘
        │              │              │              │
        ▼              ▼              ▼              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MICROCONTROLLER LAYER                         │
│  ┌──────────┐                    ┌──────────┐                   │
│  │  ESP32   │                    │  ESP32   │                   │
│  │  Node 1  │                    │  Node 2  │                   │
│  └────┬─────┘                    └────┬─────┘                   │
│       │                               │                         │
└───────┼───────────────────────────────┼─────────────────────────┘
        │                               │
        │         WiFi / LoRa           │
        ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       CLOUD LAYER                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                  Firebase / AWS IoT                      │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐              │   │
│  │  │ Ingestion│  │ Database │  │   ML     │              │   │
│  │  │  Service │  │(InfluxDB)│  │ Engine   │              │   │
│  │  └──────────┘  └──────────┘  └──────────┘              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
        │                               │
        ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Web App  │  │Mobile App│  │  Alert   │  │  Admin   │       │
│  │(React.js)│  │(Flutter) │  │ Service  │  │  Panel   │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Data Flow

```
Sensors → ESP32 → MQTT/HTTP → Cloud (Firebase) → Processing → Dashboard
                                                              → Alerts
                                                              → ML Pipeline
```

### 3.3 Deployment Architecture

- **Edge Devices:** Weatherproof enclosures with solar power option
- **Network:** LoRa gateway for remote areas, WiFi for urban
- **Cloud:** Serverless architecture for cost efficiency
- **CDN:** Static assets served via CDN for fast loading

---

## 4. Key Features

### 4.1 Core Features (MVP)

| Feature | Description | Priority |
|---------|-------------|----------|
| **Real-time Monitoring** | Live sensor data updates every 30 seconds | P0 |
| **Multi-parameter Support** | Water: pH, Turbidity, TDS, DO; Air: PM2.5, PM10, CO2, NO2 | P0 |
| **Interactive Dashboard** | Color-coded gauges, charts, and maps | P0 |
| **Threshold Alerts** | SMS/Email when parameters exceed safe limits | P0 |
| **Historical Data** | Graphs showing trends over hours/days/weeks | P0 |
| **Mobile Responsive** | Access dashboard on any device | P0 |

### 4.2 Enhanced Features

| Feature | Description | Priority |
|---------|-------------|----------|
| **Multi-location** | Monitor multiple stations from single dashboard | P1 |
| **User Authentication** | Role-based access (Admin, Viewer) | P1 |
| **Data Export** | Download reports as CSV/PDF | P1 |
| **Comparative Analysis** | Compare data across locations/time periods | P1 |

### 4.3 Advanced Features (Future)

| Feature | Description | Priority |
|---------|-------------|----------|
| **AI Prediction** | Forecast pollution levels for next 24-48 hours | P2 |
| **Mobile App** | Native Flutter app with push notifications | P2 |
| **API Access** | REST API for third-party integrations | P2 |
| **Smart Recommendations** | Actionable insights based on data patterns | P2 |

---

## 5. Technology Stack

### 5.1 Hardware

| Component | Specification | Quantity | Est. Cost |
|-----------|---------------|----------|-----------|
| ESP32 DevKit | WiFi + BLE, Dual Core | 2 | ₹800 |
| DHT11 Sensor | Temperature + Humidity | 2 | ₹200 |
| MQ135 Sensor | Air Quality (CO2, NH3, NOx) | 2 | ₹400 |
| pH Sensor Kit | Analog pH 0-14 | 1 | ₹1,500 |
| Turbidity Sensor | NTU measurement | 1 | ₹800 |
| TDS Sensor | Total Dissolved Solids | 1 | ₹600 |
| PM2.5 Sensor | Laser dust sensor | 1 | ₹1,200 |
| LoRa Module | SX1276 (optional) | 2 | ₹1,000 |
| **Total** | | | **₹6,500** |

### 5.2 Software Stack

| Layer | Technology | Justification |
|-------|------------|---------------|
| **Microcontroller** | ESP32 (Arduino IDE / PlatformIO) | WiFi built-in, low power, community support |
| **Communication** | MQTT / HTTP | Lightweight, real-time capable |
| **Backend** | Node.js + Express | Fast API development, JavaScript ecosystem |
| **Database** | Firebase Realtime DB + InfluxDB | Firebase for real-time sync, InfluxDB for time-series |
| **Frontend** | React.js + Tailwind CSS | Modern, responsive, fast development |
| **Mobile** | Flutter | Cross-platform, single codebase |
| **Cloud** | Firebase (Free Tier) | Real-time database, auth, hosting |
| **ML** | Python + scikit-learn | Prediction models for pollution trends |
| **Visualization** | Chart.js / D3.js | Interactive graphs and gauges |

### 5.3 Development Tools

| Tool | Purpose |
|------|---------|
| Git + GitHub | Version control |
| VS Code | Code editor |
| Figma | UI/UX design |
| Postman | API testing |
| Arduino IDE | Hardware programming |

---

## 6. Implementation Plan

### 6.1 Phase Timeline (3 Days)

| Day | Morning (9AM-1PM) | Afternoon (2PM-6PM) | Evening (7PM-11PM) |
|-----|-------------------|---------------------|---------------------|
| **Day 1** | Procure components, setup workspace | ESP32 basic setup, sensor connections | Firebase project setup, basic API |
| **Day 2** | Sensor calibration, data collection | Cloud integration, data storage | Dashboard UI development |
| **Day 3** | Alert system implementation | Testing & bug fixes | Documentation & submission |

### 6.2 Task Distribution

#### Anirudh (Hardware Lead)
- [ ] Day 1: Component procurement, ESP32 setup
- [ ] Day 1: Sensor wiring and connections
- [ ] Day 2: Sensor calibration and testing
- [ ] Day 2: Data transmission to cloud
- [ ] Day 3: Hardware troubleshooting

#### Anand (Software Lead)
- [ ] Day 1: Firebase project configuration
- [ ] Day 1: Backend API development
- [ ] Day 2: Dashboard UI with React
- [ ] Day 2: Real-time data visualization
- [ ] Day 3: Alert system, documentation

### 6.3 Deliverables

| Deliverable | Description | Owner |
|-------------|-------------|-------|
| Working Prototype | Functional sensor node + dashboard | Both |
| GitHub Repository | Clean code with README | Anand |
| Demo Video | 3-minute walkthrough | Both |
| Documentation | Setup guide, API docs | Anand |

---

## 7. Innovation & Uniqueness

### 7.1 What Makes Our Solution Different

1. **Dual Monitoring:** First system to monitor BOTH water and air quality in one integrated platform
2. **Low Cost:** Under ₹7,000 per station vs ₹50,000+ for commercial solutions
3. **Open Source:** All code and designs will be publicly available
4. **Scalable:** LoRa support enables rural deployment without WiFi
5. **Predictive:** ML-based forecasting enables proactive action

### 7.2 Future Scope

- Integration with government CPCB monitoring network
- Drone-based sensor deployment for remote areas
- Blockchain-based data integrity for regulatory compliance
- Citizen science app for crowdsourced monitoring

---
