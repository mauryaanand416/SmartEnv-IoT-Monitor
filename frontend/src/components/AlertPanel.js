import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const AlertPanel = ({ currentData }) => {
  const alerts = [];
  
  if (currentData.air_quality > 100) {
    alerts.push({
      type: 'danger',
      message: `High Air Quality Index: ${Math.round(currentData.air_quality)} AQI`,
      icon: XCircle
    });
  }
  
  if (currentData.ph < 6.5 || currentData.ph > 8.5) {
    alerts.push({
      type: 'warning',
      message: `pH Level ${currentData.ph < 6.5 ? 'Too Acidic' : 'Too Alkaline'}: ${currentData.ph?.toFixed(2)}`,
      icon: AlertTriangle
    });
  }
  
  if (currentData.tds > 500) {
    alerts.push({
      type: 'warning',
      message: `High TDS Level: ${Math.round(currentData.tds)} ppm`,
      icon: AlertTriangle
    });
  }

  if (alerts.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <h4 className="font-semibold text-green-800">All Systems Normal</h4>
            <p className="text-green-600 text-sm">All parameters are within safe limits</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <div 
          key={index}
          className={`p-4 rounded-xl border ${
            alert.type === 'danger' 
              ? 'bg-red-50 border-red-200' 
              : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <alert.icon className={`w-5 h-5 ${
              alert.type === 'danger' ? 'text-red-500' : 'text-yellow-500'
            }`} />
            <span className={`font-medium ${
              alert.type === 'danger' ? 'text-red-700' : 'text-yellow-700'
            }`}>
              {alert.message}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertPanel;
