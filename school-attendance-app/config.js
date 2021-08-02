import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBXNfOqAshQBOkdO6knPpQZnqdnnENwccI",
    authDomain: "attendence-app-45476.firebaseapp.com",
    databaseURL: "https://attendence-app-45476-default-rtdb.firebaseio.com",
    projectId: "attendence-app-45476",
    storageBucket: "attendence-app-45476.appspot.com",
    messagingSenderId: "406226325714",
    appId: "1:406226325714:web:e1f88e8ac20974ab2d5d0b"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase.database();