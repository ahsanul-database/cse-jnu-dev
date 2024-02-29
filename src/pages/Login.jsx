import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { authContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import mails from "../assets/studentmail.json";

const Login = () => {
  const { user, setUser, logout, allStudentsMail, facebookLogin, googleLogin } =
    useContext(authContext);
  const [mails, setmails] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/cse-jnu-serverr/main/studentmail.json"
    )
      .then((res) => res.json())
      .then((data) => setmails(data));
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

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
        const currentStudent = mails.find(
          (std) => std.email === result.user.email
        );
        if (currentStudent) {
          toast(`Welcome Back ${result.user.displayName}`);
          setUser(result.user);
          navigate(from, { replace: true });
        } else {
          // alert("You are not a student of CSE13");
          logout();
          toast.error("You are not a student of CSE13");
        }
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Something went wrong");
      });
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="min-h-screen lg:w-3/5 py-10 mx-auto px-5 lg:px-20 ">
      <div className=" relative">
        <img
          className="relative object-cover loginimg h-[550px]"
          src="https://blog.10minuteschool.com/wp-content/uploads/2023/10/%E0%A6%9C%E0%A6%97%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A5-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC-Building.jpg"
          alt=""
        />
        <div className="absolute right-5 top-1/2 gap-5 justify-center py-10">
          <button
            onClick={handleGoogle}
            aria-label="Log in with Google"
            className="p-2 px-4 border-2 border-teal-200   rounded-lg flex gap-2 text-xl bg-base-200 hover:bg-base-300 font-bold items-center"
          >
            <span>Log In with </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-6"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
