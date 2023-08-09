//mui
import { makeStyles } from "@mui/styles";
import { ArrowDropUp } from "@mui/icons-material";
//project imports
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  toTop: {
    right: "3%",
    bottom: "3%",
    position: "fixed !important",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down(680)]: {
      padding: "0 !important",
    },
  },
}));

export default function ScrollToTopButton({ onClick, isOnTop }) {
  const classes = useStyles();
  return (
    <CustomButton
      className={classes.toTop}
      sx={{
        opacity: !isOnTop ? "1" : "0",
        visibility: isOnTop ? "hidden" : "visible",
      }}
      onClick={onClick}
    >
      <ArrowDropUp />
    </CustomButton>
  );
}
