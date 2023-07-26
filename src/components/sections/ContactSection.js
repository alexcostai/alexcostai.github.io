//mui
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
//project imports
import CustomButton from "../CustomButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10%",
    paddingBlock: "8%",
    color: theme.palette.primary.contrastText,
  },
  btnsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
}));

export default function ContactSection({ reference }) {
  const classes = useStyles();
  return (
    <Grid ref={reference} container className={classes.container}>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Typography
          variant="h4"
          sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
        >
          Contame sobre tu próximo <br /> proyecto
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.btnsContainer}>
        <CustomButton href="https://www.linkedin.com/in/alexcostai/">
          Linkedin
        </CustomButton>
        <CustomButton href="https://github.com/alexcostai">Github</CustomButton>
        <CustomButton href="mailto:alexunio28@gmail.com">Email</CustomButton>
      </Grid>
    </Grid>
  );
}
