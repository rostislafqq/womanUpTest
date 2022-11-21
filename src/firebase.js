// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC91ScLIL5MFyTmjbwXm2t-yMk2JT91jeE',
  authDomain: 'testtodo-925c4.firebaseapp.com',
  projectId: 'testtodo-925c4',
  storageBucket: 'testtodo-925c4.appspot.com',
  messagingSenderId: '782192936344',
  appId: '1:782192936344:web:ef1f34e3009a0fe8e117ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
