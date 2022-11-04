import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseconfig } from "./firebaseconfig";
firebase.initializeApp(firebaseconfig);

const auth = firebase.auth();
// const firestore = firebase.firestore();
const user = auth.user;
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};
const signOutWithGoogle = () => {
  auth.signOut();
};
function SignIn() {
  const [user] = useAuthState(auth);
  let userData = {};
  if (user !== null) {
    userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }
  return <>{!user && signInWithGoogle()}</>;
}

export const CheckUser = () => {
  const [user] = useAuthState(auth);
  if (user !== null) {
    return 1;
  }
  return 0;
};
export const UserInfo = () => {
  const [user] = useAuthState(auth);
  let userData = {};
  if (user !== null) {
    userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userData;
  }
  return null;
};
export const IsAdmin = () => {
  const [user] = useAuthState(auth);
  if (user !== null) {
    const admin = [{username: "Kanishk rawat"}];
    // admin.forEach((a) => {
    //   if (user.displayName == a.username) {
    //     return 1;
    //   }
    // });

    if(user.displayName===admin[0].username){
      return 1;
    }
  }
  return 0;
};
export default SignIn;
export { signInWithGoogle, signOutWithGoogle, user };
