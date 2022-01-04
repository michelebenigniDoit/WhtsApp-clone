import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLa-B9H-GAPdlopBKl3bzGFA-dSkJiafc",
  authDomain: "whatsapp-clone-2c12a.firebaseapp.com",
  projectId: "whatsapp-clone-2c12a",
  storageBucket: "whatsapp-clone-2c12a.appspot.com",
  messagingSenderId: "461633358929",
  appId: "1:461633358929:web:e482346c923b8c25137c70",
  measurementId: "G-573K30QBH4"
}; // SDK firebase usa per conntettersi al mio specifico backend firebase


const firebaseApp = firebase.initializeApp(firebaseConfig); //configurazione Firebase
const db = firebaseApp.firestore(); //accedere istanza Firebase
const auth = firebase.auth(); //autenticazione Firebase
const provider = new firebase.auth.GoogleAuthProvider(); //autenticazione Google

export { auth, provider };
export default db;