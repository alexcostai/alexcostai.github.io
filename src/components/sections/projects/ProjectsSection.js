//mui
import { Grid, Typography } from "@mui/material";
//project imports
import ProjectsList from "./ProjectsList";
import ProjectDrawer from "./ProjectDrawer";
import useProjectsSection from "@/hooks/useProjectsSection";

export default function ProjectsSection({ reference }) {
  const [
    classes,
    projects,
    openDrawer,
    setOpenDrawer,
    selectedProject,
    setSelectedProject,
  ] = useProjectsSection();
  return (
    <Grid
      id={"proyectos"}
      container
      ref={reference}
      className={classes.container}
      gap={5}
    >
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" fontWeight={"bold"}>
          Proyectos
        </Typography>
      </Grid>
      <ProjectsList
        projects={projects}
        setOpenDrawer={setOpenDrawer}
        setSelectedProject={setSelectedProject}
      />
      <ProjectDrawer
        project={selectedProject}
        drawerState={openDrawer}
        setDrawerState={setOpenDrawer}
      />
    </Grid>
  );
}
