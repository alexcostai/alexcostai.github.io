import Image from "next/image";
//mui
import { makeStyles } from "@mui/styles";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Divider, Grid, Link, Typography } from "@mui/material";
//project imports
import CustomButton from "../CustomButton";
import PersonalPhoto from "@/../public/images/profile-photo.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    [theme.breakpoints.down(680)]: {
      flexDirection: "column !important",
      justifyContent: "center",
      rowGap: 6,
    },
  },
  link: {
    margin: "0.5rem !important",
  },
  divider: {
    width: "100%",
    backgroundColor: theme.palette.secondary.dark,
  },
  personalImg: {
    width: "10rem",
    height: "10rem",
    borderRadius: "100%",
  },
  personalInfoContainer: {
    padding: "10%",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("680")]: {
      flexDirection: "column !important",
      alignItems: "center",
    },
  },
  personalInfoContent: {
    marginLeft: "2rem",
    [theme.breakpoints.down("680")]: {
      marginLeft: "0",
      textAlign: "center",
    },
  },
  socialMediaContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: "5px",
  },
  socialMediaBtn: {
    color: theme.palette.primary.contrastText,
    background: "none",
    border: "none",
    outline: "inherit",
    transition: "0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
      color: `${theme.palette.primary.contrastText} !important`,
    },
  },
}));

export default function MainSection({ scrollTo }) {
  const classes = useStyles();
  return (
    <>
      <Grid container sx={{ paddingInline: "5%" }}>
        <Grid item xs={12} className={classes.header}>
          <div>
            <Button
              onClick={() => scrollTo("projects")}
              className={classes.link}
            >
              Proyectos
            </Button>
            <Button
              onClick={() => scrollTo("aboutMe")}
              className={classes.link}
            >
              Sobre Mí
            </Button>
          </div>
          <CustomButton onClick={() => scrollTo("contact")}>
            Contactame
          </CustomButton>
        </Grid>
        <Divider classes={{ root: classes.divider }} />
      </Grid>
      <Grid container sx={{ paddingInline: "10%" }}>
        <Grid item xs={12} className={classes.personalInfoContainer}>
          <div>
            <Image
              src={PersonalPhoto}
              alt="personal-photo"
              className={classes.personalImg}
              priority
            />
            <div className={classes.socialMediaContainer}>
              <Link
                href="https://www.linkedin.com/in/alexcostai/"
                target="_blank"
                className={classes.socialMediaBtn}
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://github.com/alexcostai"
                target="_blank"
                className={classes.socialMediaBtn}
              >
                <GitHub />
              </Link>
              <Link
                href="mailto:alexunio28@gmail.com"
                target="_blank"
                className={classes.socialMediaBtn}
              >
                <Email />
              </Link>
            </div>
          </div>
          <div className={classes.personalInfoContent}>
            <Typography variant="h3" fontWeight={"bold"}>
              Desarrollador Front-End
            </Typography>
            <Typography variant="h6">
              Hola 👋. Me llamo Alex Costa, actualmente estoy viviendo en
              Argentina y trabajo en remoto con el mundo.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}