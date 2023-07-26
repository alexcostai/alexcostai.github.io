//mui
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dividerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  divider: {
    width: "90%",
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function SectionDivider() {
  const classes = useStyles();
  return (
    <div className={classes.dividerContainer}>
      <Divider classes={{ root: classes.divider }} />
    </div>
  );
}
