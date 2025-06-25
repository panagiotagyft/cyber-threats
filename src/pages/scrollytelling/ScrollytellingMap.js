import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import countryInfo from '../../data/countryInfo.json';

const ScrollytellingMap = forwardRef((props, ref) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const pathRef = useRef();
  const zoomRef = useRef();
  const infoBoxRef = useRef();
  const countriesRef = useRef([]);

  const clicked = (event, d) => {
    if (!svgRef.current || !pathRef.current || !zoomRef.current || !infoBoxRef.current) return;

    const [[x0, y0], [x1, y1]] = pathRef.current.bounds(d);
    const countryName = d.properties.name;

    /* Use D3 to select all paths and update via selection */
    d3.select(svgRef.current)
      .selectAll("path")
      .style("fill", d => {
        const name = d?.properties?.name;
        return name === countryName
          ? "red" // Χρωμάτισε την επιλεγμένη χώρα κόκκινη
          : countryInfo[name]
          ? "#888" // Χώρες με δεδομένα
          : "#444"; // Χώρες χωρίς δεδομένα (πιο σκούρο γκρι)
      });

    /* Info box update */
    const info = countryInfo[countryName] || "No data available.";
    infoBoxRef.current
      .style("display", "block")
      .html(`<h3>${countryName}</h3><p style='text-align: justify;'>${info}</p>`);

    /* Zoom to the clicked country */
    d3.select(svgRef.current)
      .transition()
      .duration(750)
      .call(
        zoomRef.current.transform,
        d3.zoomIdentity
          .translate(470, 250)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / 940, (y1 - y0) / 500)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
      );

    /* Notify the parent to scroll to the step */
    if (props.onCountryClick){
      props.onCountryClick(countryName);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerCountry(name) {
      const country = countriesRef.current.find(d => d.properties.name === name);
      if (country){
        clicked(null, country);
      }
    },
    resetView(){
      if (!zoomRef.current || !svgRef.current) return;

      /* reset zoom */
      d3.select(svgRef.current)
        .transition()
        .duration(750)
        .call(
          zoomRef.current.transform,
          d3.zoomIdentity
        );
      
      /* Hide info box */
      infoBoxRef.current?.style("display", "none");

      /* Reset fill colors */
      d3.select(svgRef.current)
      .selectAll("path")
      .style("fill", d => {
        const name = d?.properties?.name;
        return countryInfo[name] ? "#888" : "#444";
      });
    }
  }));

  useEffect(() => {
    const container = containerRef.current;
    d3.select(container).selectAll('*').remove();

    const width = 940;
    const height = 500;
    const path = d3.geoPath(d3.geoNaturalEarth1());
    pathRef.current = path;

    const svg = d3.select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    svgRef.current = svg.node();

    const g = svg.append("g");

    /* Updated Info Box creation */
    const infoBox = d3.select(container)
      .append("div")
      .attr("id", "info-box")
      .style("display", "none");

    infoBoxRef.current = infoBox;

    // **Αλλαγή εδώ: Χρησιμοποιήστε ένα πιο λεπτομερές αρχείο GeoJSON/TopoJSON**
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(world => {
    // Εναλλακτικά, αν το 50m δεν είναι αρκετό, δοκιμάστε το 10m:
    // d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json").then(world => {
      const allCountries = topojson.feature(world, world.objects.countries).features;
      countriesRef.current = allCountries;

      path.projection().fitSize([width, height], { type: "FeatureCollection", features: allCountries });

      /* Base country outlines (in very dark grey) */
      g.append("g")
        .attr("fill", "#333")
        .selectAll("path")
        .data(allCountries)
        .join("path")
        .attr("d", path);

      /* Main countries layer with conditional color */
      const countries = g.append("g")
        .attr("cursor", "pointer")
        .selectAll("path")
        .data(allCountries)
        .join("path")
        .attr("d", path)
        .attr("fill", d => countryInfo[d.properties.name] ? "#888" : "#444")
        .on("click", (event, d) => {
          const name = d.properties.name;
          if (!countryInfo[name]) return; /* Only allow click if data exists */
          clicked(event, d);
        });

      countries.append("title").text(d => d.properties.name);

      g.append("path")
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-linejoin", "round")
        .attr("d", path(topojson.mesh(world, world.objects.countries, (a, b) => a !== b)));

      const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", event => {
          g.attr("transform", event.transform);
          g.attr("stroke-width", 1 / event.transform.k);
        });

      svg.call(zoom);
      zoomRef.current = zoom;
    });
  }, []);

  return (
     <div id="map" ref={containerRef} style={{ position: 'relative' }}>
        <div id="country-title"></div>
    </div>
  );
});

export default ScrollytellingMap;