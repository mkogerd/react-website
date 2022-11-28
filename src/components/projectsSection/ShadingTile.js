import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function ShadingTile({name, description, summary, image}) {
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <ContainingCard>
        <Box
          component='img'
          src={image} 
          alt={`thumbnail for "${name}" project`}
          sx={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />

        <Box 
          className='card-content'
          p={3}
          zIndex={2}
          sx={{
            opacity: 0,
            transform: 'translateY(10%)',
            transition: 'opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;',
          }}
          color='white'
        >
          <Typography variant="h3">
            {name}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>

        <Box className='linear-gradient'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
          sx={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 10%, rgb(0 0 0 / 78%) 80%)',
            opacity: 0.3,
            transition: 'opacity 300ms ease-in-out 0s',
          }}
          />
      </ContainingCard>
    </Grid>
  );
}

function ContainingCard({ onClick, onMouseEnter, onMouseLeave, children }) {
  return (
    <Box sx={{
      height: 0,
      width: '100%',
      paddingBottom: '100%',
      position: 'relative',
      textAlign: 'left',
    }}>
      <Card
        raised={true}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%',
          bgcolor: 'background.card',
          '&:hover': {
            '.linear-gradient': {
              opacity: 1,
            },
            '.card-content': {
              transform: 'none',
              opacity: 1,
            },
          },
        }}
      >
        {children}
      </Card>
    </Box>
  );
}

export default ShadingTile;