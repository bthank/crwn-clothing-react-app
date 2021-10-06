import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyC0mopiWDXNSSgH6IxNE-HnoeU0Z-TtJog",
        authDomain: "crwn-db-78a3b.firebaseapp.com",
        projectId: "crwn-db-78a3b",
        storageBucket: "crwn-db-78a3b.appspot.com",
        messagingSenderId: "365373405660",
        appId: "1:365373405660:web:8b32fa1fe479657a267719"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


