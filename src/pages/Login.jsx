import { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { authContext } from "../context/AuthProvider";

const Login = () => {
  const [user, setUser] = useState(null);
  const { facebookLogin, googleLogin } = useContext(authContext);
  const handleLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="flex gap-5 justify-center py-10">
          <button onClick={handleLogin}>
            <FaFacebookF className="text-5xl bg-teal-200 p-3 rounded-full" />
          </button>
          <button onClick={handleGoogle}>
            <FaGoogle className="text-5xl bg-teal-200 p-3 rounded-full" />
          </button>
        </div>
        <div className="py-10 flex flex-col items-center justify-center">
          {user && (
            <>
              <h1>Name: {user.displayName}</h1>
              <h1>Email: {user.email}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
