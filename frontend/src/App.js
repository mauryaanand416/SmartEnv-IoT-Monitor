import React from 'react';
import SensorDashboard from './components/SensorDashboard';
import DataChart from './components/DataChart';
import AlertPanel from './components/AlertPanel';
import { useSensorData, getAirQualityStatus, getPHStatus, getTDSStatus } from './hooks/useSensorData';
import { Activity, Wifi, RefreshCw } from 'lucide-react';

function App() {
  const { currentData, history, loading, error } = useSensorData('station_01', 50);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading sensor data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <XCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Connection Error</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SmartEnv</h1>
                <p className="text-sm text-gray-500">IoT Environmental Monitor</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wifi className="w-4 h-4 text-green-500" />
                <span>Station: ST-01</span>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Live
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <AlertPanel currentData={currentData} />
        </div>

        <div className="mb-8">
          <SensorDashboard 
            currentData={currentData}
            getAirQualityStatus={getAirQualityStatus}
            getPHStatus={getPHStatus}
            getTDSStatus={getTDSStatus}
          />
        </div>

        <div className="mb-8">
          <DataChart history={history} />
        </div>

        <footer className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                <span className="font-semibold">SmartEnv</span> - IoT Environmental Monitoring System
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Team Code-x | Omnikon National Hackathon 2026
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Last updated: {new Date(currentData.timestamp).toLocaleString()}</span>
              <a 
                href="https://github.com/mauryaanand416/SmartEnv-IoT-Monitor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
