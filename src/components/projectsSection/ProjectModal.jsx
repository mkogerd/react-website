import styled from "@emotion/styled";
import { ArrowBack, GitHub, Launch } from "@mui/icons-material";
import { Button, Chip, Divider, GlobalStyles, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function ProjectModal({ project, closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Close modal when escape key is pressed
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    // Close modal when the user clicks anywhere outside of it
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <>
      <ShadowOverlay
        variants={overlayAnimationVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      />
      <Modal
        ref={modalRef}
        variants={modalAnimationVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        {preventBodyScroll}
        <Button onClick={closeModal}>
            <ArrowBack />
            return to projects
        </Button>
        <TopDivider />
        <ModalContent>
          <Typography variant="h3">
            {project.name}
          </Typography>
          <Typography variant="body2">
            {project.description}
          </Typography>
          <ProjectImage src={project.imageMain} alt={`"${project.name}"`} />
          <Typography variant="h4">
            About
          </Typography>
          <Typography variant="body2">
            {project.summary}
          </Typography>
          <Typography variant="h4">
            Technologies
          </Typography>
          <Box>
            {project.technologies.map(tech => <Chip key={tech} label={tech} />)}
          </Box>
          <ButtonGroup>
            { project.repositoryLink &&
              <Button startIcon={<GitHub />} href={project.repositoryLink} variant="outlined">
                View Repository
              </Button>
            }
            { project.demoLink &&
              <Button startIcon={<Launch />} href={project.demoLink} variant="outlined">
                Check it out
              </Button>
            }
          </ButtonGroup>
        </ModalContent>
      </Modal>
    </>
  );
}

const ShadowOverlay = motion(styled(Box)({
  zIndex: 3,
  position: 'fixed',
  height: '100%',
  width: '100%',
  top: 0,
  right: 0,
  background: 'rgba(0, 0, 0)',
}));

const overlayAnimationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const Modal = motion(styled(Box)(({ theme }) => ({
  position: 'fixed',
  height: `calc(100vh - ${theme.components.NavigationBar.height})`,
  zIndex: 3,
  top: theme.components.NavigationBar.height,
  right: 0,
  overflow: 'scroll',
  background: theme.palette.background.default,
  textAlign: 'left',
  padding: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '600px',
  },
})));

const modalAnimationVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      ease: 'easeIn',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};

const preventBodyScroll = <GlobalStyles styles={{ body: { overflow: 'hidden' }}} />;

const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
}));

const TopDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const ProjectImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
});

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export default ProjectModal;