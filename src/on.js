import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

export default function ScrollytellingDemo() {
  const [currentStep, setCurrentStep] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {/* Κείμενο */}
      <div style={{ width: '50%', padding: '2rem' }}>
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {[0, 1, 2].map((i) => (
            <Step data={i} key={i}>
              <div style={{ margin: '0 0 200px 0' }}>
                <h2>Βήμα {i + 1}</h2>
                <p>Περιγραφή για το βήμα {i + 1}.</p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      {/* Γραφικό */}
      <div style={{ width: '50%', position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={`image${currentStep}.jpg`}
          alt={`Γραφικό για το βήμα ${currentStep + 1}`}
          style={{ width: '80%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
