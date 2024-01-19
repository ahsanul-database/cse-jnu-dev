import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const authContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // all state---------------------------------
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const authInfo = {
    name: "abir",
    studentData,
    loading,
    setLoading,
    facebookLogin,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
