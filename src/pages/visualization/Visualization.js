// src/pages/Visualization/Visualization.js
import React from 'react';
import TableauEmbed from '../../components/tableauembed/TableauEmbed';
import './Visualization.css';

export default function Visualization() {
  const dashboardUrl = 'https://public.tableau.com/views/CyberSecurityViz_updated1/Dashboard1';
  const title = 'Εισαγωγή στην ενότητα Cybersecurity 2015';
  const dataSource = 'Πηγή δεδομένων: Tableau Public';

  return (
    <div className="viz-container">
      <h2 className="viz-title">{title}</h2>
      <div className="viz-embed">
        <TableauEmbed url={dashboardUrl} />
      </div>
      <p className="viz-source">{dataSource}</p>
    </div>
);
}
