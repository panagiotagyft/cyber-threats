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
        <h2 className="viz-title0">Visualization</h2>
      </div>

      <div className="text-content-ins">
    
        <p>This interactive cybersecurity dashboard examines the evolution and global distribution of cyber threats between 2015 and 2024. It provides a data-driven analysis of how different types of cyberattacks impact critical industries, countries and users, and how defense mechanisms influence the time required to resolve incidents. The dataset powering the dashboard originates from publicly recognized frameworks and threat intelligence sources, such as the Verizon DBIR, ENISA Threat Landscape Reports, and the MITRE ATT&CK Framework.</p>
        <p>The visualization focuses on selected countries with strategic digital ecosystems: Japan, China, Russia, the United States, Brazil, the United Kingdom, France, Germany, Australia, and India. These nations represent diverse threat exposure profiles, regulatory responses and cybersecurity maturity levels.</p>
        <p>The dashboard consists of 2 filters and 3 interconnected visual elements:
            1.	A dynamic Year filter (slider format) located at the top-right of the dashboard allows users to adjust the time window of analysis through sliding or selecting specific years between 2015 and 2024. In this way, users can examine how cyber threats, incident response times, and affected sectors have evolved over time.
            2.	Cyber Threat Categories (Top Navigation Bar-Filter):
            The dashboard begins by highlighting six primary cyber threats: Distributed Denial of Service (DDoS), Malware, Man-in-the-Middle (MiTM), Phishing, Ransomware, and SQL Injection. These categories are aligned with definitions and classifications drawn from ENISA’s Threat Landscape Reports and the MITRE ATT&CK Framework, ensuring taxonomic consistency and technical validity.
            By allowing users to toggle between different threat types, the dashboard supports multidimensional analysis, enabling exploration of how each attack vector propagates, which systems or sectors it targets, and how response mechanisms differ accordingly. This design enhances the user's situational awareness and supports cross-threat comparison within a unified analytical framework, a feature commonly employed in cyber threat intelligence platforms.
        </p>
        
        <p>Let us briefly explore the significance of each major cyber threat:</p>
        <p>Distributed Denial of Service
            A DDoS attack overwhelms a network, server, or online service with a flood of internet traffic, rendering it unavailable to legitimate users. These attacks typically originate from large networks of compromised devices (botnets).
            Malware is an overarching term used to describe any software or firmware intended to perform an unauthorised process that will have an adverse impact on the confidentiality, integrity or availability of a system.
            MITM (Man-in-the-Middle)
            A MITM attack occurs when an attacker intercepts and potentially alters communications between two parties without their knowledge. It targets data confidentiality and can be used for credential theft or manipulation of transactions.
            Phishing
            Phishing involves deceptive emails or messages that trick users into revealing sensitive information, such as passwords or financial data. It often impersonates trusted entities to exploit human error rather than technical flaws.

            Ransomware
            According to ENISA’s Threat Landscape for Ransomware Attacks5 report, ransomware is defined as a type of attack where threat actors take control of a target’s assets and demand a ransom in exchange for the return of the asset’s availability or in exchange for publicly exposing the target’s data.
            SQL Injection
            SQL Injection is a code injection technique that exploits vulnerabilities in web applications by inserting malicious SQL queries. It allows attackers to access, manipulate, or delete data from the backend database.
        </p>
        <p>A. A.	Total Time Required for Incident Resolution by Defence Type (Bar Chart):
          The bar chart on the left visualizes the aggregated time (in hours) required to resolve cybersecurity incidents, categorized by the type of defense mechanism deployed. These mechanisms include AI-based detection systems, traditional antivirus software, encryption protocols, firewall infrastructures, and VPN technologies.
          This component enables a comparative evaluation of operational response efficiency, offering insights into how different defense approaches perform in real-world mitigation scenarios. The visualization allows stakeholders, such as SOC teams, CISOs and policy analysts, to identify which strategies may offer quicker containment under specific threat conditions.
          The data stems from a synthesis of incident timelines as recorded in public cybersecurity incident reports and empirical datasets, including the Verizon Data Breach Investigations Report (DBIR) and ENISA's Threat Landscape series (2015–2024).
        </p>
        <p>B. Cyberattack Targets: Industries with the Most Impacted Users (Treemap):
        The treemap at the center of the dashboard reveals which industries have experienced the highest number of affected users as a result of cyberattacks. These include sectors like IT, banking, healthcare, education, government, retail, and telecommunications.
        What makes these sectors especially vulnerable is not only the volume of data they manage, but also the level of digital interdependence that characterizes their day-to-day operations. A single breach in any of these domains can cascade across entire systems, disrupting services and undermining trust.
        The data behind this visualization supports risk modeling efforts and aligns closely with findings from ENISA’s Sectoral Threat Landscape and the OECD’s Digital Economy Outlook, both of which emphasize the growing exposure of data-centric and service-heavy industries to cyber threats.
        </p>
        <p>C. C.	Most Affected Countries by Number of Attacked Users (Map):
        The interactive world map visualizes the geopolitical distribution of cyberattacks based on the volume of affected users per country. A heatmap gradient communicates intensity, helping identify national ecosystems with substantial digital risk exposure. The map centers on countries with advanced digital economies and cyber-relevant infrastructures, including the United States, China, India, Russia, Germany, the United Kingdom, France, Japan, Australia and Brazil.
        This geographic component draws upon aggregated threat intelligence sources and global incident databases, and it allows the user to explore correlations between national cybersecurity maturity, digital dependency, and threat volume. The map aids in comparative cyber risk assessment and contributes to global situational awareness, in line with methodologies seen in ITU’s Global Cybersecurity Index and OECD’s Global Forum on Digital Security for Prosperity.
        </p>
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