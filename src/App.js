import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Mobile from "./components/Mobile";
import Web from "./components/Web";
import Devops from "./components/Devops";
import Software from "./components/Software";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Navbar></Navbar>} />
          <Route path="/" element={<Footer></Footer>} />
          <Route path="/About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Mobile" element={<Mobile />} />
          <Route path="Web" element={<Web />} />
          <Route path="Devops" element={<Devops />} />
          <Route path="Software" element={<Software />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
