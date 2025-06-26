import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Credits from "./pages/credits/Credits";
import CyberGlobe from './components/globe/Globe';
import './App.css';
import NavigationBar from './components/navbar/NavigationBar';
import Visualization from "./pages/visualization/Visualization";
import ScrollytellingPage from "./pages/scrollytelling/ScrollytellingPage";
import SocialSidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <CyberGlobe />

      {/* Ξεκινάμε εδώ τον HashRouter: */}
      <Router>
        <NavigationBar />
        <SocialSidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/scrollytelling" element={<ScrollytellingPage />} />
          <Route path="/credits" element={<Credits />} />

          {/* Fallback για κάθε άλλο path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      {/* Τέλος Router */}
    </>
  );
}

export default App;
