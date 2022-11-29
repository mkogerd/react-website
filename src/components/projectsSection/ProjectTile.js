import { Box, Card, Grid, styled, Typography } from "@mui/material";
import React from "react";

function ProjectTile({name, description, summary, image}) {
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <ProjectCardWrapper>
        <ProjectCard raised={true}>
          <ProjectImage src={image} alt={`thumbnail for "${name}" project`} />
          <GradientVeil className='gradient-veil' />
          <CardContent className='card-content'>
            <Typography variant="h3">
              {name}
            </Typography>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
        </ProjectCard>
      </ProjectCardWrapper>
    </Grid>
  );
}

// this wrapper is a hack to make all of the project tiles have the same height
const ProjectCardWrapper = styled(Box)({
  height: 0,
  width: '100%',
  paddingBottom: '100%',
  position: 'relative',
});

const ProjectCard = styled(Card)({
  textAlign: 'left',
  position: 'absolute',
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  height: '100%',
  bgcolor: 'background.card',
  '&:hover': {
    '.gradient-veil': {
      opacity: 1,
    },
    '.card-content': {
      transform: 'none',
      opacity: 1,
    },
  },
});

const ProjectImage = styled('img')({
  objectFit: 'cover',
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const GradientVeil = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 10%, rgb(0 0 0 / 78%) 80%)',
  opacity: 0.3,
  transition: 'opacity 300ms ease-in-out 0s',
});

const CardContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  padding: theme.spacing(3),
  opacity: 0,
  transform: 'translateY(10%)',
  transition: 'opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;',
  color: 'white',
}));

export default ProjectTile;