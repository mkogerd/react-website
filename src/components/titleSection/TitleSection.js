
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

function TitleSection() {
  return (
    <Container sx={{
      minHeight: "100vh",
      width: "100%",
      p: 3,
      pt: 8,
    }}>
      <Typography align="left">
        Hi 👋, I'm Koger
      </Typography>
      <Typography variant="h1" align="left">
        Full Stack Software Engineer
      </Typography>
      <Typography align="left">
        I help people design and build things
      </Typography>
      <Box>
        <img src="images/portrait.png" alt="Portrait of Koger" width={"100%"} />
      </Box>
    </Container>
  );
}

export default TitleSection;