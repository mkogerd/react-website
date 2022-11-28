import { Container, Grid, Typography } from "@mui/material";
import PROJECT_DATA from "appData/projectData";
import PaddedSection from "components/PaddedSection";
import React from "react";
import ShadingTile from "./ShadingTile";

function Projects() {
  return (
    <PaddedSection sectionName='Projects' useAltBackground={true}>
      <Container>
        <Typography variant="h2" gutterBottom pb={3}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {PROJECT_DATA.map(project => <ShadingTile key={`${project.name}_2`} {...project} />)}
        </Grid>
      </Container>
    </PaddedSection>
  );
}

export default Projects;