import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBsgKBZyE-Ji3rw0S4PWVg_V03tjvnOeag",
  authDomain: "crown-db-ffc64.firebaseapp.com",
  projectId: "crown-db-ffc64",
  storageBucket: "crown-db-ffc64.appspot.com",
  messagingSenderId: "869070113037",
  appId: "1:869070113037:web:8b8338c96f5acff6d44844"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists) {
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;