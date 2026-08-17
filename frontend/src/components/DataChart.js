import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const DataChart = ({ history, title = "Sensor Readings Over Time" }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const chartData = history.map(item => ({
    ...item,
    time: formatTimestamp(item.timestamp)
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Legend />
          
          <Line 
            type="monotone" 
            dataKey="air_quality" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Air Quality (AQI)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="ph" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="pH Level"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="tds" 
            stroke="#10b981" 
            strokeWidth={2}
            name="TDS (ppm)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-600">Air Quality</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-600">pH Level</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-600">TDS</span>
        </div>
      </div>
    </div>
  );
};

export default DataChart;
