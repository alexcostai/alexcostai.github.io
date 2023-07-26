//mui
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBlock: "3%",
    color: theme.palette.primary.contrastText,
  },
}));

export default function FooterSection() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Typography>© Alex Costa 2023. All rights reserved.</Typography>
      </Grid>
    </Grid>
  );
}
