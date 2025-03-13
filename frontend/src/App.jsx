import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactForm from "./Pages/Contect/ContactForm";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
<<<<<<< HEAD
import UserList from "./Pages/userList/UserList";
=======
import Booking from "./Pages/Booking";

>>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
