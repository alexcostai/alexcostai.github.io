import Image from "next/image";
//mui
import { makeStyles, useTheme } from "@mui/styles";
import { Close, GitHub } from "@mui/icons-material";
import { Drawer, Typography, useMediaQuery } from "@mui/material";
//project imports
import Carousel from "./Carousel";
import IconsList from "@/components/IconsList";
import CustomButton from "@/components/CustomButton";
import SectionDivider from "@/components/SectionDivider";
import SocialMediaIcon from "@/components/SocialMediaIcon";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50vw",
    height: "auto",
    paddingTop: "1%",
    color: `${theme.palette.primary.contrastText} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderLeft: `2px solid ${theme.palette.primary.light} !important`,
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
    [theme.breakpoints.down("680")]: {
      width: "100vw",
      borderLeft: "none !important",
    },
  },
  image: {
    width: "100%",
    height: "40vh",
    objectFit: "contain",
    backgroundColor: theme.palette.primary.light,
  },
  titleContainer: {
    display: "flex",
    paddingInline: "5%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    padding: "5%",
  },
  iconsContainer: {
    gap: 8,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  closeBtn: {
    width: 30,
    height: 30,
  },
}));

export default function ProjectDrawer({
  drawerState,
  setDrawerState,
  project,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const matchDown460 = useMediaQuery(theme.breakpoints.down("460"));
  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      onClose={() => setDrawerState(false)}
      PaperProps={{ className: classes.container }}
    >
      <div className={classes.titleContainer}>
        <Typography variant={matchDown460 ? "h4" : "h3"}>
          {project.title}
        </Typography>
        <CustomButton
          className={classes.closeBtn}
          onClick={() => setDrawerState(false)}
        >
          <Close />
        </CustomButton>
      </div>
      <div className={classes.titleContainer} style={{ marginBottom: 10 }}>
        <Typography>{project.type}</Typography>
        {project.github && (
          <SocialMediaIcon href={project.github} icon={<GitHub />} />
        )}
      </div>
      {project.images.length > 1 ? (
        <Carousel images={project.images} />
      ) : (
        <Image
          className={classes.image}
          src={project.images[0]}
          alt={`Project-Image`}
        />
      )}
      <div className={classes.descriptionContainer}>
        <Typography>{project.description}</Typography>
        {project.descriptionDots && (
          <ul>
            {project.descriptionDots.map((dot, idx) => (
              <li key={idx}>
                <Typography>{dot}</Typography>
              </li>
            ))}
          </ul>
        )}
      </div>
      <SectionDivider />
      <div className={classes.iconsContainer}>
        <IconsList icons={project.technologies} />
      </div>
    </Drawer>
  );
}
