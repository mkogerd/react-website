import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Container, Link, Typography } from '@mui/material';
import React from 'react';

function ContactSection() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact me
      </Typography>
      <Typography>
        Feel free to get in touch.
      </Typography>
      <Link href="https://www.linkedin.com/in/mkogerd">
        <LinkedIn />
      </Link>
      <Link href="mailto:koger@mkogerd.com?Subject=Hello">
        <Email />
      </Link>
      <Link href="https://github.com/mkogerd">
        <GitHub />
      </Link>
    </Container>
  );
}

export default ContactSection;