import React, { useState, useCallback, createContext, useEffect } from "react";
import AdminDashBoard from "../../Components/AdminDashBoard/Admin";
import {
  SignIn as FirebaseEmailSignIn,
  SignOut as FirebaseEmailSignOut,
  onAuthStateChange,
} from "../../db/firebasefunction";
import SigninPage from "../../Components/AdminDashBoard/SignIn";

const defaultUser = { loggedIn: false, email: "" };
const UserContext = createContext(defaultUser);
const UserProvider = UserContext.Provider;



function App() {
  const [user, setUser] = useState({ loggedIn: false, email: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    }
  }, []);

  const SignIn = useCallback((email, password) => {
    return FirebaseEmailSignIn(email, password);
  }, []);
  const SignOut = useCallback(() => {
    FirebaseEmailSignOut();
  }, []);
  
  if (!user.loggedIn) {
    return <SigninPage SignIn={SignIn} />;
  }
  return (
    <UserProvider value={user}>
      <AdminDashBoard SignOut={SignOut} />
    </UserProvider>
  );
}

export default App;
