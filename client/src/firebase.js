import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4rXOenf9nXE6aXktTK7trZb6--Vmmi4w",
  authDomain: "study-adda-de15c.firebaseapp.com",
  databaseURL: "https://study-adda-de15c-default-rtdb.firebaseio.com",
  projectId: "study-adda-de15c",
  storageBucket: "study-adda-de15c.firebasestorage.app",
  messagingSenderId: "1090895482376",
  appId: "1:1090895482376:web:6014984e50657c117c0bbd",
  measurementId: "G-PSK3ZG4HKR"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};
