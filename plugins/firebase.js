import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA_yy6L8fbelbJ_l7uTBK5NZ1DhDxcKV0Y",
    authDomain: "foodadvisor-cb0b0.firebaseapp.com",
    projectId: "foodadvisor-cb0b0",
    storageBucket: "foodadvisor-cb0b0.firebasestorage.app",
    messagingSenderId: "177392770030",
    appId: "1:177392770030:web:224cdae5f242ce7c54ccff",
    databaseURL: '',    
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }