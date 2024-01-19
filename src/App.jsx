import { Outlet } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" lg:w-full">
      <MyNav />
      <div className="w-full lg:w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
