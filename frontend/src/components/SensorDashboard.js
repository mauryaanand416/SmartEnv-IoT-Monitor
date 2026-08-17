import React from 'react';
import { Wind, Droplets, Thermometer, Activity } from 'lucide-react';

const GaugeCard = ({ title, value, unit, status, icon: Icon, maxValue, currentValue }) => {
  const percentage = Math.min((currentValue / maxValue) * 100, 100);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${status.bg}`}>
            <Icon className={`w-6 h-6 ${status.color}`} />
          </div>
          <h3 className="text-gray-700 font-semibold">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
          {status.label}
        </span>
      </div>
      
      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-800">{value}</span>
          <span className="text-gray-500">{unit}</span>
        </div>
        
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              percentage < 50 ? 'bg-green-500' : 
              percentage < 75 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>0</span>
          <span>{maxValue} {unit}</span>
        </div>
      </div>
    </div>
  );
};

const SensorDashboard = ({ currentData, getAirQualityStatus, getPHStatus, getTDSStatus }) => {
  const airStatus = getAirQualityStatus(currentData.air_quality);
  const phStatus = getPHStatus(currentData.ph);
  const tdsStatus = getTDSStatus(currentData.tds);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <GaugeCard
        title="Air Quality"
        value={Math.round(currentData.air_quality)}
        unit="AQI"
        status={airStatus}
        icon={Wind}
        maxValue={500}
        currentValue={currentData.air_quality}
      />
      
      <GaugeCard
        title="pH Level"
        value={currentData.ph?.toFixed(2)}
        unit="pH"
        status={phStatus}
        icon={Droplets}
        maxValue={14}
        currentValue={currentData.ph}
      />
      
      <GaugeCard
        title="TDS"
        value={Math.round(currentData.tds)}
        unit="ppm"
        status={tdsStatus}
        icon={Activity}
        maxValue={1000}
        currentValue={currentData.tds}
      />
      
      <GaugeCard
        title="Status"
        value={currentData.air_quality < 100 ? "Online" : "Check"}
        unit=""
        status={{ label: currentData.air_quality < 100 ? "Active" : "Warning", 
                  color: currentData.air_quality < 100 ? "text-green-500" : "text-yellow-500",
                  bg: currentData.air_quality < 100 ? "bg-green-100" : "bg-yellow-100" }}
        icon={Thermometer}
        maxValue={1}
        currentValue={currentData.air_quality < 100 ? 1 : 0.5}
      />
    </div>
  );
};

export default SensorDashboard;
