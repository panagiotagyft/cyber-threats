import React from 'react';
import './Credits.css';
import {
  Box,
  Typography,
  Link,
  Divider, // Import the Divider component
} from '@mui/material';


// Data for team members (remains unchanged)
const teamMembers = [
  { id: 1, name: 'Rigas Vasileiou', photo: process.env.PUBLIC_URL + '/assets/team_photos/rigas.png', githubPage: 'https://github.com/rigas2k19' },
  { id: 2, name: 'Panagiota Gyftou', photo: process.env.PUBLIC_URL + '/assets/team_photos/panagiota.png', githubPage: 'https://github.com/panagiotagyft' },
  { id: 3, name: 'Panagiotis Fasoulidis', photo: process.env.PUBLIC_URL + '/assets/team_photos/panagiotis.png', githubPage: 'https://github.com/panafaso' },
];

// Updated data for credits with accurate license information
const creditsList = [
  {
    title: 'Visualization Tools',
    content: [
      { name: 'Tableau', href: 'https://www.tableau.com', license: 'Role-based paid licenses' },
      { name: 'Observable notebooks', href: 'https://observablehq.com', license: 'MIT, BSD, GPL, etc. (user choice)' },
      { name: 'Observable framework', href: 'https://observablehq.com', license: 'ISC License (equivalent to MIT/BSD-2-Clause)' },
    ],
  },
  {
    title: 'Web Framework & Libraries',
    content: [
      { name: 'React', href: 'https://react.dev', license: 'MIT License' },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com', license: 'MIT License (e.g., via GitHub)' },
      { name: 'Tailwind Plus', href: 'https://www.tailwindplus.com', license: 'Personal/Team commercial license' },
      { name: 'Material UI (core)', href: 'https://mui.com', license: 'MIT License' },
      { name: 'MUI X (Pro/Premium)', href: 'https://mui.com/x/', license: 'Requires commercial license' },
    ],
  },
  {
    title: 'Site Hosting',
    content: [
      { name: 'GitHub Pages', href: 'https://pages.github.com', license: 'Free hosting, under GitHub Terms (repo license via LICENSE file)' },
    ],
  },
  {
    title: 'Kaggle Dataset',
    content: [
      { name: 'Global Cybersecurity Threats (2015-2024)', href: 'https://www.kaggle.com/datasets/atharvasoundankar/global-cybersecurity-threats-2015-2024', license: 'Under general Kaggle datasets terms of use' },
    ],
  },
  {
    title: 'Project Repository',
    content: [
      { name: 'GitHub Repository', href: 'https://github.com/panagiotagyft/cyber-threats', license: 'MIT License' }, // Assuming MIT License based on your link
    ],
  },
  {
    title: 'Sources of the visualizations',
    content: [
      { name: 'Sources used for Tableau visualization & scrollytelling', href: 'https://drive.google.com/file/d/1EId0NgVcw8Yu4TAtpNqvgna0D083sBpM/view', license: '' }, // Assuming MIT License based on your link
    ],
  },
];

const Credits = () => {
  return (
    <Box className="team-modal-content">
      {/* Project Team Section */}
      <Box sx={{ p: 4, mb: 6, borderRadius: '8px', backgroundColor: 'rgba(8,75,104,0.17)', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', backdropFilter: 'blur(5px)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Project Team
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {teamMembers.map(member => (
            <Box key={member.id} className="team-member-card">
              <Link href={member.githubPage} target="_blank" rel="noopener noreferrer" className="team-member-photo-link">
                <img alt={member.name} src={member.photo} className="team-member-photo" />
              </Link>

              {/* Εδώ το όνομα γίνεται link προς την GitHub Pages */}
              <Link href={member.githubPage} target="_blank" rel="noopener noreferrer" underline="hover">
                <Typography variant="h6" component="p" mt={2}>
                  {member.name}
                </Typography>
              </Link>

            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Divider between Project Team and Credits sections */}
      {/* Course Information */}
      <Box sx={{ p: 4, mb: 6, borderRadius: '8px', backgroundColor: 'rgba(8,75,104,0.17)', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', backdropFilter: 'blur(5px)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Course Information
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          Professor: <Link href="https://www.makebelieve.gr/mroussou/" target="_blank" rel="noopener noreferrer" sx={{ color: '#11cece', textDecoration: 'underline' }}>Maria Roussou</Link>
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 1 }}>
          Course: <Link href="https://www.di.uoa.gr/sites/default/files/documents/grad/grad_cs_courses/Μ126%20Οπτικοποίηση%20Δεδομένων.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#11cece', textDecoration: 'underline' }}>Data Visualization - M126</Link>
        </Typography>
      </Box>

      {/* Credits, Tools & Sources Section */}
      <Box sx={{ p: 4, mt: 6, borderRadius: '8px', backgroundColor: 'rgba(8,75,104,0.17)', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', backdropFilter: 'blur(3px)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Credits, Tools & Sources
        </Typography>
        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 2, columnGap: 4, textAlign: 'left' }}>
          {creditsList.map((item, index) => ( // Added index to check if it's the last item
            <React.Fragment key={item.title}>
              {/* Label */}
              <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: '"Genos", sans-serif', fontWeight: 'bold', fontSize: '1.25rem' }}>
                {item.title}
              </Typography>

              {/* Container for links and licenses */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {item.content.map(linkItem => (
                  // Each link-license pair
                  <Box key={linkItem.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Link href={linkItem.href} target="_blank" rel="noopener noreferrer" sx={{ color: '#11cece', fontFamily: '"Genos", sans-serif', fontSize: '1.25rem', flexShrink: 0 }}>
                      {linkItem.name}
                    </Link>
                    {/* Display the license with padding-left for separation, and allow it to grow */}
                    {linkItem.license && (
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"Genos", sans-serif', fontSize: '1.1rem', ml: 2, textAlign: 'right', flexGrow: 1 }}>
                        ({linkItem.license})
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Add a horizontal line ONLY if it's not the last item in the creditsList */}
              {index < creditsList.length - 1 && (
                <Divider sx={{ gridColumn: '1 / -1', my: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Credits;