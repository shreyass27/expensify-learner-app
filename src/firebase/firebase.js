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
//   database.ref('expenses/location/setSquare').set('setTquare');



// const pushToDb = (description, amount, createdAt, note) => {
//   database.ref('expenses').push({description, amount, createdAt, note})
// };

 

// database.ref('expenses').on('child_changed', (snapShot) => {
  // const expenses = [];
  // snapShot.forEach((expense) => {
  //   expenses.push({
  //     id: expense.key,
  //     ...expense.val()
  //   })
  // })
  // console.log('No Promise then was val', snapShot.val());
  // console.log('No Promise then was expenses', expenses);
// });

// setTimeout(() =>  pushToDb('Hair Wash', 22, Date.now(), 'Head and shoulders'), 10000);

// pushToDb('Hair Wash', 22, Date.now(), 'Head and shoulders');
// const onChangeSub = database.ref('type').on('value',(data) => console.log('No Promise then was val', data.val()));
// setTimeout(
//   () => database.ref().update({'type/love': 'very true changes 1st Time'}), 3000
// )
// setTimeout(
//   () => database.ref('type').off('value', onChangeSub), 7000
// )
// setTimeout(() => database.ref().update({'type/love': 'very true changes 2nd Time'}), 10000);
// database.ref().update({'type/love': 'very true changes 2nd Time'});
// database.ref().remove()
// .then((data) => console.log('Promise was val', data.val()))
// .catch((error) => console.log('catch', error));