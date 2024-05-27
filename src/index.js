import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AboutUs from "./components/About/About";
import ContactUs from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Popular from "./components/Popular/Popular";
import Navbar from "./components/Navbar/Navbar";
import Booking from "./components/Booking confirm/Booking confirm";
import Forget from "./components/Forget/Forget";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


<Navbar />

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "About",
        element: <AboutUs/>,
      },
      { 
        path: "contact",
        element: <ContactUs/>,
      },
    { 
        path: "Login",
        element: <Login/>,
      },
      { 
        path: "Home",
        element: <Home/>,
      },
      { 
        path: "SignUp",
        element: <SignUp/>,
      },
      { 
        path: "popular",
        element: < Popular Destination/>,
      },
      { 
        path: "Booking confirm",
        element: <Booking/>,
      },
      { 
        path: "Forget",
        element: <Forget/>,
      },
  ]);
  


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>
);
