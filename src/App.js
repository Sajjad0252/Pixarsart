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
import Cloud from "./components/Cloud";
import Ui from "./components/Ui";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Mobile" element={<Mobile />} />
          <Route path="Web" element={<Web />} />
          <Route path="Devops" element={<Devops />} />
          <Route path="Software" element={<Software />} />
          <Route path="Cloud" element={<Cloud />} />
          <Route path="Ui" element={<Ui />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
