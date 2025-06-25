import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Credits from "./pages/credits/Credits";
import CyberGlobe from './components/globe/Globe';
import './App.css';
import NavigationBar from './components/navbar/NavigationBar';
// import On from './on';
// import Sources from "./pages/sources/Sources";
import Visualization from "./pages/visualization/Visualization";
import ScrollytellingPage from "./pages/scrollytelling/ScrollytellingPage";
// import { LanguageProvider } from "./context/LanguageContext";
import SocialSidebar from './components/sidebar/Sidebar'; // <-- Νέα εισαγωγή

function App() {
  return (
    <>
    {/* <LanguageProvider> */}
      <CyberGlobe />
      <Router basename="/cyber-threats/">
        <NavigationBar />
        <SocialSidebar /> {/* <-- Προσθήκη του Sidebar εδώ */}
        <Routes>
          <Route path="/cyber-threats" element={<Home />} />
          <Route path="/cyber-threats/visualization" element={<Visualization />} />
          <Route path="/cyber-threats/scrollytelling" element={<ScrollytellingPage />} />
          <Route path="/cyber-threats/credits" element={<Credits />} />
          {/* <Route path="/" element={<On />}></Route> */}
        </Routes>
      </Router>
      {/* </LanguageProvider> */}
        </>
  );
}

export default App;