import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAGA33lVejgJwqJsRB8IdsZeUXS2tN5FOI',
  authDomain: 'whatsapp-next-c2c84.firebaseapp.com',
  projectId: 'whatsapp-next-c2c84',
  storageBucket: 'whatsapp-next-c2c84.appspot.com',
  messagingSenderId: '786836952180',
  appId: '1:786836952180:web:ffa196b32e1ccfa25e2d21',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
