import React from "react";

import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
