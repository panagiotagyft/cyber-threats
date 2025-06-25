import React, { useRef, useEffect, useState } from 'react';
import ScrollytellingMap from './ScrollytellingMap';
import './ScrollytellingPage.css';

const ScrollytellingPage = () => {
  const mapRef = useRef();
  const stepRefs = useRef([]);
  const dotNavRef = useRef();
  const [activeCountry, setActiveCountry] = useState('Intro');
  const manualScrollLock = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !manualScrollLock.current) {
          const name = entry.target.dataset.country;
          if (name !== "Intro") {
            mapRef.current?.triggerCountry(name);
          }
          else{
            mapRef.current?.resetView(); /* Reset map */
          }
          setActiveCountry(name);
        }
      });
    }, { threshold: 0.5 });

    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    { country: "Intro", content: (<><h2>Cybersecurity Around the World</h2><p>From national strategies…</p></>) },
    ...[
      "United States of America","China","Russia","India","Japan",
      "Brazil","Australia","United Kingdom","France","Germany","Greece"
    ].map(name => ({ country: name, content: <h2>{name}</h2> }))
  ];

  const handleCountryClick = (name) => {
    const index = steps.findIndex(s => s.country === name);
    if (index !== -1){
      manualScrollLock.current = true;

      stepRefs.current[index]?.scrollIntoView({behavior: 'smooth', block: 'center'});
      setActiveCountry(name);

      setTimeout(() => {
        manualScrollLock.current = false;
      }, 750);
    }
  }

  const handleDotClick = (i) => {
    const stepEl = stepRefs.current[i];
    if (stepEl) {
      manualScrollLock.current = true;

      stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const country = steps[i].country;

      if (country !== "Intro") {
        mapRef.current?.triggerCountry(country);
      }

      setActiveCountry(country);

      setTimeout(() => {
        manualScrollLock.current = false;
      }, 1000);
    }
  };
 
  return (
    <div className="container">
      <div id="dot-nav" ref={dotNavRef}>
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`dot ${activeCountry === step.country ? 'active' : ''}`} 
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>

      <div className="graphic">
        <ScrollytellingMap ref={mapRef} onCountryClick={handleCountryClick} />
      </div>

      <div className="scrolly">
        {steps.map((s, i) => (
          <div
            key={i}
            ref={el => (stepRefs.current[i] = el)}
            className="step"
            data-country={s.country}
          >
            {s.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollytellingPage;