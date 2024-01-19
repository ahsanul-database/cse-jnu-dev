import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { authContext } from "../context/AuthProvider";

const Login = () => {
  const { facebookLogin } = useContext(authContext);
  const handleLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="flex justify-center py-10">
          <button onClick={handleLogin}>
            <FaFacebookF className="text-5xl bg-teal-200 p-3 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
