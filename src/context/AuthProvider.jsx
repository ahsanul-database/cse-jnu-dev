import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const authContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // all state---------------------------------
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [studentData, setStudentData] = useState([]);
  const allStudentsMail = studentData.map((student) => student.email);
  useEffect(() => {
    fetch("https://cse-jnu-server.vercel.app/allDataofCSE13")
      .then((res) => res.json())
      .then((data) => setStudentData(data));
  }, []);

  // Sign in method  ---------------------------
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    name: "abir",
    studentData,
    loading,
    setLoading,
    facebookLogin,
    googleLogin,
    user,
    setUser,
    allStudentsMail,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
