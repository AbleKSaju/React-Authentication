import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SingupScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./screens/AdminLogin";
import AdminHeader from "./components/AdminHeader";
import AdminDash from "./screens/AdminDash";
import { Container } from "react-bootstrap";

function App() {
  // const [admin,setAdmin]=useState(false)
    return (
    <>
    {/* {!admin? <Header /> : <AdminHeader/> }
     
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/signup" element={<SingupScreen />}></Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/adminLogin" element={<AdminLogin setadmin={setAdmin} />}></Route>
        <Route path="/adminDash" element={<AdminDash setadmin={setAdmin} />}></Route>
      </Routes> */}
        <>
      <Header />
      <ToastContainer />
        <Outlet />
    </>
    </>
  );
}

export default App;
