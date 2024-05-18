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
import Cloud from "./components/Cloud";
import Ui from "./components/Ui";
import Blog from "./components/Blog";
import Blognew from "./components/Blognew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Mobile" element={<Mobile />} />
          <Route path="Web" element={<Web />} />
          <Route path="Devops" element={<Devops />} />
          <Route path="Software" element={<Software />} />
          <Route path="Cloud" element={<Cloud />} />
          <Route path="Ui" element={<Ui />} />
          <Route path="Blognew" element={<Blognew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
