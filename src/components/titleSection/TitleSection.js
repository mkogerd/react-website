
import React from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import PaddedSection from 'components/PaddedSection';

function TitleSection() {
  return (
    <PaddedSection sectionName='About'>
      <Container sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        paddingY: 8,
      }}>
        <Grid container id="About" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography align="left">
              Hi 👋, I'm Koger
            </Typography>
            <Typography variant="h1" align="left">
              Full Stack Software Engineer
            </Typography>
            <Typography align="left">
              I help people design and build things
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <img src="images/blank.png" alt="Portrait of Koger" width={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PaddedSection>
  );
}

export default TitleSection;