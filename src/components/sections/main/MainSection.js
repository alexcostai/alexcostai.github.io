import Image from "next/image";
//mui
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
//project imports
import Header from "./Header";
import SocialMediaIcon from "../../SocialMediaIcon";
import PersonalPhoto from "@/../public/images/profile-photo.jpg";

const useStyles = makeStyles((theme) => ({
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
}));

export default function MainSection({ scrollTo }) {
  const classes = useStyles();
  return (
    <>
      <Header scrollTo={scrollTo} />
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
              <SocialMediaIcon
                href={"https://www.linkedin.com/in/alexcostai/"}
                icon={<LinkedIn />}
              />
              <SocialMediaIcon
                href={"https://github.com/alexcostai/"}
                icon={<GitHub />}
              />
              <SocialMediaIcon
                href={"mailto:alexunio28@gmail.com"}
                icon={<Email />}
              />
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
