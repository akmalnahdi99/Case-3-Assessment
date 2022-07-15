import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAlQirTZTvWeS7ddx7H3m1EfJu6mvykJWU",
  authDomain: "hotel-management-system-24fbd.firebaseapp.com",
  databaseURL: "https://hotel-management-system-24fbd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hotel-management-system-24fbd",
  storageBucket: "hotel-management-system-24fbd.appspot.com",
  messagingSenderId: "258235799214",
  appId: "1:258235799214:web:0a9b0f592c252c1ee5bf3f"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app.database().ref();