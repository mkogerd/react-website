import React from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Container, Link, styled, Typography } from '@mui/material';

import PaddedSection from 'components/PaddedSection';

function ContactSection() {
  return (
    <PaddedSection sectionName='Contact'>
      <ContactContainer>
        <Typography variant="h2">
          Contact me
        </Typography>
        <Typography>
          Feel free to get in touch.
        </Typography>
        <ContactLinks>
          <CenteredLink href="https://www.linkedin.com/in/mkogerd">
            <LinkedIn />
            LinkedIn
          </CenteredLink>
          <CenteredLink href="mailto:koger@mkogerd.com?Subject=Hello">
            <Email />
            Email
          </CenteredLink>
          <CenteredLink href="https://github.com/mkogerd">
            <GitHub />
            GitHub
          </CenteredLink>
        </ContactLinks>
      </ContactContainer>
    </PaddedSection>
  );
}

const ContactContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
}));

const ContactLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 1,
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: theme.spacing(2),
  },
}));

const CenteredLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

export default ContactSection;