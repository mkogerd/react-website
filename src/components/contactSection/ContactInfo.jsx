import React from 'react';
import { Email, GitHub, LinkedIn, LocationOn } from '@mui/icons-material';
import { Container, styled, Typography } from '@mui/material';

import PaddedSection from 'components/PaddedSection';
import { Box } from '@mui/system';
import ContactButton from './ContactButton';

function ContactSection() {
  return (
    <PaddedSection sectionName='Contact'>
      <ContactContainer>
        <Box>
          <Typography variant="h2">
            Contact Info
          </Typography>
          <Typography variant="body2">
            Feel free to get in touch.
          </Typography>
        </Box>
        <ContactButtons>
          <ContactButton
            icon={<LinkedIn fontSize="large" />}
            href='https://www.linkedin.com/in/mkogerd'
          />
          <ContactButton
            icon={<Email fontSize="large" />}
            href='mailto:koger@mkogerd.com?Subject=Hello'
            headerLabel='Email'
            subLabel='koger@mkogerd.com'
          />
          <ContactButton
            icon={<GitHub fontSize="large" />}
            href='https://github.com/mkogerd'
          />
          <ContactButton
            icon={<LocationOn fontSize="large" />}
            headerLabel='Location'
            subLabel='Austin, TX, USA'
          />
				</ContactButtons>
      </ContactContainer>
    </PaddedSection>
  );
}

const ContactContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: theme.spacing(3),
}));

const ContactButtons = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplate: '"in email" "github location" / auto 1fr',
  gridGap: theme.spacing(2),
}));

export default ContactSection;