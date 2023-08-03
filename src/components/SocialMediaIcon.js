//mui
import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
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

export default function SocialMediaIcon({ href, icon }) {
  const classes = useStyles();
  return (
    <Link href={href} target="_blank" className={classes.icon}>
      {icon}
    </Link>
  );
}
