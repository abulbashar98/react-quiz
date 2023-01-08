import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase.init";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  // get authentication from Firebase, and initialize using Configuration.
  const auth = getAuth(app);

  // useNavigate Hook to navigate when Logout, getting out of Protected Route
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return subscription;
  }, [auth]);

  // Sign Up Function

  async function signUp(email, password, userName) {
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout Function

  function logout() {
    navigate("/login");
    return signOut(auth);
  }

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
