import Image from "next/image";
//mui
import { Grid, Typography } from "@mui/material";
import useProjectsSection from "@/hooks/useProjectsSection";

export default function ProjectsSection({ reference }) {
  const [classes, projects] = useProjectsSection();
  return (
    <Grid
      id={"proyectos"}
      container
      ref={reference}
      className={classes.container}
      gap={5}
    >
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Proyectos
        </Typography>
      </Grid>
      {projects.map((project, idx) => (
        <Grid
          item
          md={5}
          className={classes.projectItem}
          key={`${project.title}-${idx}`}
        >
          <Image
            src={project.img}
            alt={project.title}
            className={classes.projectImg}
          />
          <Typography variant="h6">{project.title}</Typography>
          <div className={classes.technologiesContainer}>
            {project.technologies.map((technology, idx) => (
              <Typography key={idx} className={classes.technologyItem}>
                {technology}
              </Typography>
            ))}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
