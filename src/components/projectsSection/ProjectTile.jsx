import { Box, Card, Grid, styled, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import ProjectModal from "./ProjectModal";

function ProjectTile({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <ProjectCardWrapper
        variants={projectCardWrapperAnimationVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <ProjectCard raised={true} onClick={() => setShowModal(!showModal)}>
          <ProjectImage src={project.imageThumbnail} alt={`thumbnail for "${project.name}" project`} />
          <GradientVeil className='gradient-veil' />
          <CardContent className='card-content'>
            <Typography variant="h3">
              {project.name}
            </Typography>
            <Typography variant="body2">
              {project.description}
            </Typography>
            <TechnologyLabels>
              {project.technologies.map(tech => <TechLabel key={tech}>{tech}</TechLabel>)}
            </TechnologyLabels>
          </CardContent>
        </ProjectCard>
      </ProjectCardWrapper>
      <AnimatePresence>
        { showModal && <ProjectModal project={project} closeModal={() => setShowModal(false)} /> }
      </AnimatePresence>
    </Grid>
  );
}

// this wrapper is a hack to make all of the project tiles have the same height
const ProjectCardWrapper = motion(styled(Box)({
  height: 0,
  width: '100%',
  paddingBottom: '100%',
  position: 'relative',
}));

const projectCardWrapperAnimationVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: .5,
        ease: 'easeOut',
      },
      opacity: {
        duration: 1,
        ease: 'easeOut',
      },
    }
  },
  hidden: {
    opacity: 0,
    y: 100,
  }
}

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
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
  zIndex: 2,
  padding: theme.spacing(3),
  opacity: 0,
  transform: 'translateY(10%)',
  transition: 'opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;',
  color: 'white',
}));

const TechnologyLabels = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
}));

const TechLabel = styled('span')({
  color: '#fffff',
  background: '#666666',
  borderRadius: '50px',
  fontSize: '.5rem',
  padding: '4px 10px',
  lineHeight: '1.5',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.04),0 -1px 0 0 rgba(0,0,0,.08)',
});

export default ProjectTile;