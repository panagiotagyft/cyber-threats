import React, { useState, useEffect } from 'react';
import './Presentation.css';

const images = [
  process.env.PUBLIC_URL + '/assets/team_photos/rigas.png',
  process.env.PUBLIC_URL + '/assets/team_photos/panagiota.png',
  process.env.PUBLIC_URL + '/assets/team_photos/panagiotis.png',
];

const messages = [
  'The scrollytelling was built with Observable',
  'The website was built with the React framework',
  'The dashboard was built with Tableau',
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='presentation_container'>
      <div className="title-contenair-pr">
        <h1 className="pr-title0">Presentation</h1>
      </div>

      <div className="video-sticker-container">
        <div className="stickers">
          <div className="speech-bubble">{messages[current]}</div>
          <img
            src={images[current]}
            alt={`sticker ${current + 1}`}
            className="sticker"
          />
        </div>

        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/R0reEyGMWNA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
