import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAknasTBeIPeWlA9gxmgwYoJkQacyG2yVQ",
    authDomain: "crwn-clothing-db-bfd43.firebaseapp.com",
    projectId: "crwn-clothing-db-bfd43",
    storageBucket: "crwn-clothing-db-bfd43.appspot.com",
    messagingSenderId: "383638974688",
    appId: "1:383638974688:web:cd26ea235f047b0a78a085"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters (
    {
        prompt:"select_account"
    }
  );

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup ( auth, provider );

  export const db = getFirestore();

  export const createUserFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

  if (! userSnapshot.exists())
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {

      await setDoc( userDocRef, {
        displayName, email, createdAt
      });
    } catch(error) {
      console.log('error creating the user',error.message);
    }

  }
}