import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSlNzHQ9Hr-yToZAJLPUrxMYqwB89Z43Y',
  authDomain: 'ar-learnix.firebaseapp.com',
  databaseURL: 'https://ar-learnix-default-rtdb.firebaseio.com',
  projectId: 'ar-learnix',
  storageBucket: 'ar-learnix.appspot.com',
  messagingSenderId: '294787125171',
  appId: '1:294787125171:web:4fc72b590f2eb70b9e45c6',
  measurementId: 'G-PS850VEFPS',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
