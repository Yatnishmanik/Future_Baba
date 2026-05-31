import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css';
import Container from "./components/Container";
import Privacy from "./components/Privacy";
import About from "./components/About";
import Disclaimer from "./components/Disclaimer";

const App = () => {
  const globalBgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Zo.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={globalBgStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
