//mui
import { makeStyles } from "@mui/styles";
import { Button, Divider, Grid } from "@mui/material";
//project imports
import CustomButton from "@/components/CustomButton";

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
}));

export default function Header({ scrollTo }) {
  const classes = useStyles();
  return (
    <Grid container sx={{ paddingInline: "5%" }}>
      <Grid item xs={12} className={classes.header}>
        <div>
          <Button onClick={() => scrollTo("projects")} className={classes.link}>
            Proyectos
          </Button>
          <Button onClick={() => scrollTo("aboutMe")} className={classes.link}>
            Sobre Mí
          </Button>
        </div>
        <CustomButton onClick={() => scrollTo("contact")}>
          Contactame
        </CustomButton>
      </Grid>
      <Divider classes={{ root: classes.divider }} />
    </Grid>
  );
}
