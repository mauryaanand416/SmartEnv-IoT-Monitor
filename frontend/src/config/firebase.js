import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "smartenvironmonitor.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://smartenvironmonitor-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "smartenvironmonitor",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "smartenvironmonitor.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:000000000000:web:0000000000000000"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export default app;
