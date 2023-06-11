import React from "react";
import { Routes, Route } from 'react-router-dom'
/* ...................FOR PAGES............................. */
import Homepage from "./pages/Homepage";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Policies } from "./pages/Policies";
import Pagenotfound from "./pages/Pagenotfound.";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>

    </>
  );
}

export default App;
