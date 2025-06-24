import React, { useEffect, useRef } from "react";

export default function TableauEmbed({ url }) {
    const containerRef = useRef(null);
    const vizRef = useRef(null);

  useEffect(() => {
    // if we’ve already created it, don’t do it again
    if (vizRef.current) {
        vizRef.current.dispose();
        vizRef.current = null;
    }    
      const options = {
        hideTabs: false,
        hideToolbar: false,
        // Πάρε ρητά το dashboard (όχι ξεχωριστά sheets)
          sheetName: 'Dashboard1',
          width:        '1300px',  // ή '100%' για responsive
          height:       '600px'
            
      };

    vizRef.current = new window.tableau.Viz(containerRef.current, url,options);

    // cleanup on unmount
    return () => {
      if (vizRef.current) {
        vizRef.current.dispose();
        vizRef.current = null;
      }
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
    />
  );
}
