import Image from "next/image";
//mui
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
//project imports
import IconsList from "@/components/IconsList";

const useStyles = makeStyles((theme) => ({
  projectItem: {
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "0.2rem",
    padding: "1rem",
    position: "relative",
    transition: "0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(0.95)",
    },
  },
  imgContainer: {
    height: 250,
    maxHeight: 400,
  },
  projectImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0.2rem",
  },
  technologiesContainer: {
    marginTop: "5px",
    gap: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default function ProjectItem({ project, onClick }) {
  const classes = useStyles();
  return (
    <Grid
      item
      md={5}
      onClick={() => onClick(project)}
      className={classes.projectItem}
    >
      <div className={classes.imgContainer}>
        <Image
          src={project.images[0]}
          alt={project.title}
          className={classes.projectImg}
        />
      </div>
      <Typography variant="h6" sx={{ mt: 1 }}>
        {project.title}
      </Typography>
      <div className={classes.technologiesContainer}>
        <IconsList icons={project.technologies} />
      </div>
    </Grid>
  );
}
