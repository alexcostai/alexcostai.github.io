import Image from "next/image";
//mui
import { GitHub } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
//project imports
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
          <div className={classes.imgContainer}>
            <Image
              src={project.img}
              alt={project.title}
              className={classes.projectImg}
            />
            {project.github && (
              <a
                href={project.github}
                className={classes.hoverImg}
                target="_blank"
              >
                <GitHub style={{ fontSize: "5rem" }} />
              </a>
            )}
          </div>
          <Typography variant="h6" sx={{ mt: 1 }}>
            {project.title}
          </Typography>
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
