import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import {
  APIKEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APPID,
  MEASUREMENT_ID,
} from 'react-native-dotenv';

let config = {
  apiKey: APIKEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APPID,
  measurementId: MEASUREMENT_ID,
};

firebase.initializeApp(config);

export default firebase;
