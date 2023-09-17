import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDviub94eu_mrdR8OHbt_z-StTT7XHcckY",
    authDomain: "rural-banking-a8a02.firebaseapp.com",
    databaseURL: "https://rural-banking-a8a02-default-rtdb.firebaseio.com",
    projectId: "rural-banking-a8a02",
    storageBucket: "rural-banking-a8a02.appspot.com",
    messagingSenderId: "874414120846",
    appId: "1:874414120846:web:7e5ce8a59881a5289dcedf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebase;