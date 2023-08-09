import Image from "next/image";
//mui
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.contrastText,
  },
  iconImgContainer: {
    padding: "0.3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: "0.2rem",
    borderTopLeftRadius: "0.2rem",
  },
  iconImg: {
    width: 24,
    height: 24,
  },
  iconName: {
    padding: "0.3rem",
    backgroundColor: theme.palette.secondary.main,
    borderBottomRightRadius: "0.2rem",
    borderTopRightRadius: "0.2rem",
  },
}));

export default function IconItem({ toolIcon }) {
  const classes = useStyles();
  return (
    <div className={classes.iconContainer}>
      <div
        className={classes.iconImgContainer}
        style={{ backgroundColor: toolIcon.color }}
      >
        <Image
          src={toolIcon.icon}
          alt={toolIcon.name}
          className={classes.iconImg}
        />
      </div>
      <Typography className={classes.iconName}>{toolIcon.name}</Typography>
    </div>
  );
}
