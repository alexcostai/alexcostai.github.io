//mui
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    border: `2px solid ${theme.palette.secondary.dark} !important`,
    borderRadius: "0.2rem",
    padding: "0.3rem !important",
    paddingInline: "1rem !important",
    "&:hover": {
      transform: "scale(0.9)",
      color: `${theme.palette.primary.contrastText} !important`,
    },
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();
  const { className, children } = props;
  return (
    <Button {...props} className={`${classes.button} ${className}`}>
      {children}
    </Button>
  );
}
