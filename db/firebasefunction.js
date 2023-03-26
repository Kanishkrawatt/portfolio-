import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../db";

export const Login = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ErroCode: ", errorCode, "ErrorMessage: ", errorMessage);
    });
};

export const SignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ErroCode: ", errorCode, "ErrorMessage: ", errorMessage);
    });
};

// Signout

export const SignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const onAuthStateChange = (setUser) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      setUser({ loggedIn: true, email: user.email });
    } else {
      setUser({ loggedIn: false, email: "" });
    }
  });
};
