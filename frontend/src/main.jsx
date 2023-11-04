import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store.js";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import store from "./store.js";
// import { Provider } from "react-redux";
// import { HomeScreen } from "./screens/HomeScreen.jsx";
// import LoginScreen from "./screens/LoginScreen.jsx";
// import SingupScreen from "./screens/SingupScreen.jsx";
// import ProfileScreen from "./screens/ProfileScreen.jsx";
// import PrivateRoute from "./components/PrivateRoute.jsx";
// import ImageUpload from "./components/ImageUpload.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* <RouterProvider router={router}> */}
    {/* </RouterProvider> */}
  </React.StrictMode>
);
