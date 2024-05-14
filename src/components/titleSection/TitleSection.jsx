import React from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import PaddedSection from 'components/PaddedSection';
import LinkingParticleCanvas from '../canvases/LinkingParticleCanvas';

function TitleSection() {
  return (
    <Box style={{ position: 'relative', height: '100vh' }}>
      <LinkingParticleCanvas
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <PaddedSection sectionName='About'>
        <Container
          sx={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            position: 'relative',
            paddingY: 8,
            pointerEvents: 'none',
          }}
        >
          <Grid container id='About' alignItems='center'>
            <Grid item xs={12} sm={12} height={'100%'}>
              <Typography>Hi 👋, I'm Koger</Typography>
              <Typography variant='h1'>Full Stack Software Engineer</Typography>
              <Typography>I help people design and build things</Typography>
            </Grid>
          </Grid>
        </Container>
      </PaddedSection>
    </Box>
  );
}

export default TitleSection;
