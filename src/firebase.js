import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBb7CM1do0j4VewIzzvnlwEFT9mk0wmEmA",
  authDomain: "image-gallery-11362.firebaseapp.com",
  projectId: "image-gallery-11362",
  storageBucket: "image-gallery-11362.appspot.com",
  messagingSenderId: "792007909744",
  appId: "1:792007909744:web:871515dd77921ff2a76fb5",
  measurementId: "G-2WEDSNWEZM"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };