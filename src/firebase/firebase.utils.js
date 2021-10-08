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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    // if userAuth is not false or saying if the userAuth object does not exist,
    // then we don't want to do anything except exit from this function
    if (!userAuth) return;

    //const userRef = firestore.doc('users/121030i3');
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(userRef);
    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


