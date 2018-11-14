import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyA6WhIzB8fkx3FZYTEUnBk8hlWff53tG3Q",
    authDomain: "expensify-react99.firebaseapp.com",
    databaseURL: "https://expensify-react99.firebaseio.com",
    projectId: "expensify-react99",
    storageBucket: "expensify-react99.appspot.com",
    messagingSenderId: "895036659458"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };
