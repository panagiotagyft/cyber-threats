import React, { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'

export default function CyberGlobe() {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    if (globe) {
      globe.controls().enableZoom = false;
      globe.controls().enableRotate = false;
      globe.controls().enablePan = false;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.3;
      globe.pointOfView({ lat: 20, lng: 0, altitude: 3 });
    }
  }, []);
    
  const origins = [
    { lat: 48.8566, lng: 2.3522 },     // Παρίσι, Ευρώπη
    { lat: 55.7558, lng: 37.6173 },    // Μόσχα, Ρωσία
    { lat: 39.9042, lng: 116.4074 },   // Πεκίνο, Κίνα
    { lat: 19.4326, lng: -99.1332 },    // Πόλη του Μεξικού
    { lat: 37.0902 , lng: -95.7129 }, // ηπα
  ];
  

  const arcsData = Array.from({ length: 300 }, () => {
    const origin = origins[Math.floor(Math.random() * origins.length)];
  
    return {
      startLat: origin.lat + (Math.random() * 4 - 2),  // μικρή απόκλιση
      startLng: origin.lng + (Math.random() * 4 - 2),
      endLat: (Math.random() * 180) - 90,
      endLng: (Math.random() * 360) - 180,
      color: ["#11cece", "#2ebd0f"]
    };
  });
  
  

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
      <Globe
        ref={globeEl}
        globeImageUrl="https://upload.wikimedia.org/wikipedia/commons/b/ba/The_earth_at_night.jpg"
        backgroundColor="#020220"
        arcsData={arcsData}
        arcColor={'color'}

        // ✅ ΚΙΝΗΣΗ
        arcDashLength={0.8}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}  // κάνει κάθε arc να ξεκινά αλλού
        arcDashAnimateTime={5000}  
      />
    </div>
  )
}

//#ce1111