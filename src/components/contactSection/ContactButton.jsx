const { styled, Box, IconButton, Typography } = require("@mui/material");
const React = require("react");

function ContactButton({ icon, href, headerLabel, subLabel }) {
  return (
    <ButtonContainer>
      <StyledIconButton href={href}>
        {icon}
      </StyledIconButton>
      { (headerLabel || subLabel) && 
        <ContactButtonLabel>
          <Typography variant='header5'>
            {headerLabel}
          </Typography>
          <Typography variant='body2'>
            {subLabel}
          </Typography>
        </ContactButtonLabel>
      }
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StyledIconButton = styled(IconButton)({
  border: '1px solid',
});

const ContactButtonLabel = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  fontSize: '18px',
}));

export default ContactButton;