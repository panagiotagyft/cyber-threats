import React from 'react';
import './Credits.css';
import {
  Box,
  Typography, // Make sure this is included
  Grid,
  Link,
} from '@mui/material';

const teamMembers = [
    {
        id: 1,
        name: 'Rigas Vasileiou', 
        photo: process.env.PUBLIC_URL + '/assets/team_photos/rigas.png', // Αναφορά από τη ρίζα του public
      //   linkedin: 'https://www.linkedin.com/in/yourprofile2',
      //   github: 'https://github.com/yourgithub2',
      },
    {
      id: 2,
      name: 'Panagiota Gyftou',
      photo: process.env.PUBLIC_URL + '/assets/team_photos/panagiota.png', // Αναφορά από τη ρίζα του public
    //   linkedin: 'https://www.linkedin.com/in/yourprofile1',
    //   github: 'https://github.com/yourgithub1',
    },
    {
      id: 3,
      name: 'Panagiotis Fasoulidis',
      photo: process.env.PUBLIC_URL + '/assets/team_photos/panagiotis.png', // Αναφορά από τη ρίζα του public
    //   linkedin: 'https://www.linkedin.com/in/yourprofile3',
    //   github: 'https://github.com/yourgithub3',
    },
  ];

const Credits = () => {
    return (
      <Box className="team-modal-content" sx={{ mt: 8 }}>
        
        <h1>Project Team</h1>         
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Box className="team-member-card">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-member-photo-link"
                >
                <img
                alt={member.name}
                src={member.photo}
                className="team-member-photo"
                />
                </Link>
                <Typography variant="h6" component="p" mt={2}>
                  {member.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
  
export default Credits;