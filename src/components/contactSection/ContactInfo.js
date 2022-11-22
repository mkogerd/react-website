import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Container, Link, Typography } from '@mui/material';
import PaddedSection from 'components/PaddedSection';
import React from 'react';

function ContactSection() {
  return (
    <PaddedSection sectionName='Contact'>
      <Container>
        <Typography variant="h2" gutterBottom>
          Contact me
        </Typography>
        <Typography>
          Feel free to get in touch.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <CenteredLink href="https://www.linkedin.com/in/mkogerd">
            <LinkedIn />
            LinkedIn
          </CenteredLink>
          • 
          <CenteredLink href="mailto:koger@mkogerd.com?Subject=Hello">
            <Email />
            Email
          </CenteredLink>
          • 
          <CenteredLink href="https://github.com/mkogerd">
            <GitHub />
            GitHub
          </CenteredLink>
        </Box>
      </Container>
    </PaddedSection>
  );
}

function CenteredLink({ href, children }) {
  return (
    <Link
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {children}
    </Link>
  );
};

export default ContactSection;