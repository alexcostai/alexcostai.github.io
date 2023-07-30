import Image from "next/image";
//mui
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
//project imports
import { toolsIcons } from "@/helpers/icons";

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

export default function IconsList() {
  const classes = useStyles();
  return toolsIcons.map((icon) => (
    <div className={classes.iconContainer} key={icon.id}>
      <div
        className={classes.iconImgContainer}
        style={{ backgroundColor: icon.color }}
      >
        <Image src={icon.icon} alt={icon.name} className={classes.iconImg} />
      </div>
      <Typography className={classes.iconName}>{icon.name}</Typography>
    </div>
  ));
}
