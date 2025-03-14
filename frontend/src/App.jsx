import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactForm from "./Pages/Contect/ContactForm";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
// import UserList from "./Pages/userList/UserList";
import UserList from "./Pages/userList/UserList";
import Booking from "./Pages/Booking/Booking";
import BookingList from "./Pages/BookingList/BookingList";
import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
import AddCustomer from "./Pages/AddCustomer/AddCustomer";
// import Booking from "./Pages/Booking";

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
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingList" element={<BookingList />} />
        <Route path="/update-booking/:id" element={<UpdateBooking />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
      </Routes>
    </div>
  );
}

export default App;
