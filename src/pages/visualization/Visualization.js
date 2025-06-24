import React, { useState, useCallback } from 'react';
import { Scrollama, Step } from "react-scrollama";
import TableauEmbed from "../../components/tableauembed/TableauEmbed";
import "./Visualization.css";

export default function Visualization() {
  const dashboards = [
    {
      id:  1,
      url: "https://public.tableau.com/views/2015cyber/Dashboard1",
      texts: [
        "Εισαγωγή στην ενότητα Cybersecurity 2015",
        "Βασικές παρατηρήσεις & insights",
        "Συμπεράσματα ενότητας 1"
      ]
    },
    {
      id:  2,
      url: "https://public.tableau.com/views/2016cyber/Dashboard1",
      texts: [
        "Εισαγωγή στην ενότητα Cyber 2016",
        "Στατιστικά & τάσεις",
        "Συμπεράσματα ενότητας 2"
      ]
    },
    {
      id:  3,
      url: "https://public.tableau.com/views/2017cyber/Dashboard1",
      texts: [
        "Εισαγωγή στην ενότητα Cyber 2017",
        "Στατιστικά & τάσεις",
        "Συμπεράσματα ενότητας 3"
      ]
    }
    // ...βάλε εδώ τα υπόλοιπα dashboards σου
  ];

  // Βρίσκουμε όλα τα μοναδικά URLs
  const uniqueDashboardUrls = Array.from(new Set(dashboards.map(d => d.url)));

  // Δημιουργούμε έναν πίνακα steps με όλα τα κείμενα
  const steps = dashboards.flatMap((dashboard) =>
    dashboard.texts.map((text, index) => ({
      dashboardId: dashboard.id,
      dashboardUrl: dashboard.url,
      text,
      textIndex: index
    }))
  );

  const [currentStep, setCurrentStep] = useState(0);

  const onStepEnter = useCallback(({ data }) => {
    setCurrentStep(data);
  }, []);

  const currentDashboardUrl = steps[currentStep]?.dashboardUrl || dashboards[0].url;

  return (
    <div className="overlay-container">
      {/* Sticky side panel με όλα τα TableauEmbed preload */}
      <div className="scroll__graphic" style={{ position: 'relative', minHeight: '600px' }}>
        {uniqueDashboardUrls.map((url, idx) => (
          <div
            key={url}
            style={{
              visibility: currentDashboardUrl === url ? 'visible' : 'hidden',
              position: "fixed",
              left: "25%",
              top: '60px',
              width: "100%",
              height: "100%",
              pointerEvents: currentDashboardUrl === url ? 'auto' : 'none',
              zIndex: currentDashboardUrl === url ? 2 : 1
            }}
          >
            <TableauEmbed url={url} />
          </div>
        ))}
      </div>

      {/* Column με τα κείμενα */}
      <div className="scroll__text">
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {steps.map((step, idx) => (
            <Step data={idx} key={idx}>
              <div className={`step${currentStep === idx ? " is-active" : ""}`}>
                <div className="overlay">
                  <p>{step.text}</p>
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
}
