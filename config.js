import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcW50Q-lvZyTRARtXh6-Y_Le2xRvGahAg",
    authDomain: "cycstole-2.firebaseapp.com",
    databaseURL: "https://cycstole-2-default-rtdb.firebaseio.com",
    projectId: "cycstole-2",
    storageBucket: "cycstole-2.appspot.com",
    messagingSenderId: "122373953238",
    appId: "1:122373953238:web:875db81e2bcbcee9b41b77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();