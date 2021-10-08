import firebase from "@firebase/app-compat";
import 'firebase/firestore';

const firestore = firebase.firestore();

// we are saying firestore, get me the collection called 'users' and within that
// get me the document (the specific user) with id 'xak1nM4wE2S16Gpu4UhF' and 
// for that user get me his collection of cart items
firestore.collection('users').doc('Q34tvNHXLkx5H3IcdrQI')
    .collection('cartItems').doc('ZcwMQKM37AQJwTthCt15');

// or we could query this way
firestore.doc('/users/Q34tvNHXLkx5H3IcdrQI/cartItems/ZcwMQKM37AQJwTthCt15')
// to get cartItems
firestore.collection('/users/Q34tvNHXLkx5H3IcdrQI/cartItems');