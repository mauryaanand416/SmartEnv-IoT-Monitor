import { useState, useEffect } from 'react';
import { database } from '../config/firebase';
import { ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';

export const useSensorData = (stationId = 'station_01', dataLimit = 50) => {
  const [currentData, setCurrentData] = useState({
    air_quality: 0,
    ph: 7.0,
    tds: 0,
    timestamp: 0
  });
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sensorRef = ref(database, `sensor_data/${stationId}`);
    const historyRef = query(
      ref(database, `sensor_data/${stationId}`),
      orderByChild('timestamp'),
      limitToLast(dataLimit)
    );

    const unsubscribeCurrent = onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        setCurrentData(snapshot.val());
        setLoading(false);
      }
    }, (err) => {
      setError(err.message);
      setLoading(false);
    });

    const unsubscribeHistory = onValue(historyRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      setHistory(data);
    });

    return () => {
      unsubscribeCurrent();
      unsubscribeHistory();
    };
  }, [stationId, dataLimit]);

  return { currentData, history, loading, error };
};

export const getAirQualityStatus = (aqi) => {
  if (aqi <= 50) return { label: 'Good', color: 'text-green-500', bg: 'bg-green-100' };
  if (aqi <= 100) return { label: 'Moderate', color: 'text-yellow-500', bg: 'bg-yellow-100' };
  if (aqi <= 200) return { label: 'Unhealthy', color: 'text-orange-500', bg: 'bg-orange-100' };
  return { label: 'Hazardous', color: 'text-red-500', bg: 'bg-red-100' };
};

export const getPHStatus = (ph) => {
  if (ph >= 6.5 && ph <= 8.5) return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-100' };
  if (ph >= 5 && ph <= 9) return { label: 'Moderate', color: 'text-yellow-500', bg: 'bg-yellow-100' };
  return { label: 'Unsafe', color: 'text-red-500', bg: 'bg-red-100' };
};

export const getTDSStatus = (tds) => {
  if (tds <= 300) return { label: 'Excellent', color: 'text-green-500', bg: 'bg-green-100' };
  if (tds <= 600) return { label: 'Good', color: 'text-blue-500', bg: 'bg-blue-100' };
  if (tds <= 900) return { label: 'Fair', color: 'text-yellow-500', bg: 'bg-yellow-100' };
  return { label: 'Poor', color: 'text-red-500', bg: 'bg-red-100' };
};
