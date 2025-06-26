// src/pages/Visualization/Visualization.js
import React, { useState } from 'react';
import TableauEmbed from '../../components/tableauembed/TableauEmbed';
import './Visualization.css';

export default function Visualization() {
  const dashboardUrl = 'https://public.tableau.com/views/CyberSecurityViz_updated2/Dashboard1';
  const title = 'Cyber Threats: Defense Mechanisms and Industry Impact (2015-2024)';
  const dataSource = 'Tableau Public';

  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleInfoClick = () => {
    setShowInfoBox(!showInfoBox);
  };

  const handleCloseClick = () => {
    setShowInfoBox(false);
  };

  return (
    <div className="viz-container">

      <div className="title-contenair-viz">
        <h2 className="viz-title0">Visualization</h2>
      </div>

      <div className="text-content-ins">
        <h2>Instructions</h2>
        <p>
          As our digital dependency grows, so do cyber threats — in scale, complexity, and cost. This overview
          highlights two critical metrics that reflect the global impact of cyber incidents from 2015 to 2024:
        </p>
      </div>

      {showInfoBox && (
        <div className="info-box-overlay">
          <div className="info-box">
            <button className="close-button" onClick={handleCloseClick}>
              ×
            </button>
            <h3>Instructions</h3>
            <p>
              .......
            </p>
          </div>
        </div>
      )}

      <h5 className="viz-title1">{title}</h5>

     <div className="viz-embed">
        <div className="tableau">
          <TableauEmbed url={dashboardUrl} />
        </div>
        <div className="info-icon" onClick={handleInfoClick}>i</div>
      </div>

      <p className="viz-source">{dataSource}</p>
    </div>
  );
}
