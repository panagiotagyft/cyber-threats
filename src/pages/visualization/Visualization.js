// src/pages/Visualization/Visualization.js
import React, { useState } from 'react';
import TableauEmbed from '../../components/tableauembed/TableauEmbed';
import './Visualization.css';

export default function Visualization() {
  const dashboardUrl = 'https://public.tableau.com/views/CyberSecurityViz_updated2/Dashboard1';
  const title = 'Cyber Threats: Defense Mechanisms and Industry Impact (2015-2024)';

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
        <h1 className="viz-title0">Visualization</h1>
      </div>

      <div className="text-content-ins">
        
        <p>This interactive cybersecurity dashboard examines the evolution and global distribution of cyber threats between 2015 and 2024. It provides a data-driven analysis of how different types of cyberattacks impact critical industries, countries and users, and how defense mechanisms influence the time required to resolve incidents. The dataset powering the dashboard originates from publicly recognized frameworks and threat intelligence sources, such as the Verizon DBIR, ENISA Threat Landscape Reports, and the MITRE ATT&CK Framework.</p>
        <p>The visualization focuses on selected countries with strategic digital ecosystems: Japan, China, Russia, the United States, Brazil, the United Kingdom, France, Germany, Australia, and India. These nations represent diverse threat exposure profiles, regulatory responses and cybersecurity maturity levels.</p>
      </div>
      <div className="text-content-ins">  
          <h2>Dashboard Features</h2>

          <p>Our dashboard is designed for insightful analysis, featuring two dynamic filters and three interconnected visual elements:</p>

          <h3>1. Dynamic Year Filter (Slider Format)</h3>
          <p>Located at the top-right, this slider allows you to adjust the analysis time window from 2015 to 2024. Easily explore how cyber threats, incident response times, and affected sectors have evolved over the years.</p>

          <h3>2. Cyber Threat Categories (Top Navigation Bar)</h3>
          <p>The dashboard highlights six primary cyber threats: Distributed Denial of Service (DDoS), Malware, Man-in-the-Middle (MiTM), Phishing, Ransomware, and SQL Injection. These categories align with definitions from ENISA's Threat Landscape Reports and the MITRE ATT&CK Framework, ensuring consistent and technically valid classifications.</p>
          <p>By toggling between these threat types, you can conduct multidimensional analysis, exploring how each attack vector propagates, which systems or sectors it targets, and how response mechanisms differ. This design enhances situational awareness and supports cross-threat comparison, a key feature in advanced cyber threat intelligence platforms.</p>

      </div>
      <div className="text-content-ins">
        <h2>Understanding Key Cyber Threats</h2>

        <p>Let's briefly explore the significance of each major cyber threat:</p>

        <ul>
          <li><strong>Distributed Denial of Service (DDoS):</strong> Overwhelms a network, server, or online service with a flood of internet traffic, rendering it unavailable to legitimate users. These attacks typically originate from large networks of compromised devices (botnets).</li>
          <li><strong>Malware:</strong> An overarching term for any software or firmware designed to perform unauthorized processes that negatively impact a system's confidentiality, integrity, or availability.</li>
          <li><strong>Man-in-the-Middle (MiTM):</strong> An attack where an adversary intercepts and potentially alters communications between two parties without their knowledge. It primarily targets data confidentiality and can be used for credential theft or transaction manipulation.</li>
          <li><strong>Phishing:</strong> Involves deceptive emails or messages that trick users into revealing sensitive information like passwords or financial data. It often impersonates trusted entities, exploiting human error rather than technical flaws.</li>
          <li><strong>Ransomware:</strong> As defined by ENISA, this attack involves threat actors taking control of a target’s assets and demanding a ransom for their return or for not publicly exposing the target’s data.</li>
          <li><strong>SQL Injection:</strong> A code injection technique that exploits vulnerabilities in web applications by inserting malicious SQL queries. This allows attackers to access, manipulate, or delete data from the backend database.</li>
        </ul>
      </div>
      <div className="text-content-ins">
        <h2>Interconnected Visual Elements</h2>

          <h3>A. Total Time Required for Incident Resolution by Defense Type (Bar Chart)</h3>
          <p>This bar chart visualizes the aggregated time (in hours) needed to resolve cybersecurity incidents, broken down by the type of defense mechanism used. These mechanisms include AI-based detection, traditional antivirus, encryption protocols, firewall infrastructures, and VPN technologies. This component allows for a comparative evaluation of operational response efficiency, revealing which strategies offer quicker containment under specific threat conditions. Data is synthesized from public cybersecurity incident reports and empirical datasets, including the Verizon Data Breach Investigations Report (DBIR) and ENISA's Threat Landscape series (2015–2024).</p>

          <h3>B. Cyberattack Targets: Industries with the Most Impacted Users (Treemap)</h3>
          <p>The treemap in the center of the dashboard highlights industries with the highest number of affected users from cyberattacks, including IT, banking, healthcare, education, government, retail, and telecommunications. These sectors are particularly vulnerable due to both the volume of data they manage and their high level of digital interdependence. A single breach can have cascading effects, disrupting services and eroding trust. This visualization supports risk modeling efforts and aligns with findings from ENISA's Sectoral Threat Landscape and the OECD's Digital Economy Outlook.</p>

          <h3>C. Most Affected Countries by Number of Attacked Users (Map)</h3>
          <p>The interactive world map visualizes the geopolitical distribution of cyberattacks based on the volume of affected users per country. A heatmap gradient indicates intensity, helping identify national ecosystems with significant digital risk exposure. The map focuses on the ten selected countries with advanced digital economies and cyber-relevant infrastructures. This geographic component draws on aggregated threat intelligence sources and global incident databases, allowing users to explore correlations between national cybersecurity maturity, digital dependency, and threat volume. It aids in comparative cyber risk assessment and contributes to global situational awareness, in line with methodologies from ITU's Global Cybersecurity Index and OECD's Global Forum on Digital Security for Prosperity.</p>
      </div>

      {showInfoBox && (
        <div className="info-box-overlay">
          <div className="info-box">
            <button className="close-button" onClick={handleCloseClick}>
              ×
            </button>
            <h3>Information</h3>
            <p>
              <p>The left side features a bar chart showing the total incident resolution time (in hours) broken down by defense mechanism: AI‐based detection systems, traditional antivirus software, encryption protocols, firewall infrastructures, and VPN technologies. This comparative view helps SOC teams, CISOs, and policy analysts identify the fastest mitigation strategies.</p>

              <p>In the center, a treemap illustrates the number of affected users by industry: IT, banking, healthcare, education, government, retail, and telecommunications. It highlights how data volume and digital interdependence drive sector vulnerability.</p>

              <p>On the right, an interactive heatmap displays the geographic distribution of attacks by affected‐user count, focusing on Japan, China, India, Russia, Germany, the UK, France, the US, Australia, and Brazil. This supports comparative risk assessment and global situational awareness.</p>

            </p>
          </div>
        </div>
      )}

      <h5 className="viz-title1">{title}</h5>
      
      <div className="viz-embed">
        {/* Το info-icon μετακινήθηκε μέσα στο div "tableau" */}
        <div className="tableau">
          <TableauEmbed url={dashboardUrl} />
          <div className="info-icon" onClick={handleInfoClick}>i</div> {/* ΤΩΡΑ ΕΔΩ! */}
        </div>
      </div> 

      <p className="viz-source">
        <span>Source: </span>
        <a
          href="https://www.kaggle.com/datasets/atharvasoundankar/global-cybersecurity-threats-2015-2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaggle Dataset: Global Cybersecurity Threats (2015–2024)
        </a>
      </p>

    </div>
  );
}