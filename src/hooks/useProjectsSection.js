//mui
import { makeStyles } from "@mui/styles";
//project imports
import DashboardImg from "@/../public/images/projects/dashboard.png";
import WeatherAppImg from "@/../public/images/projects/weather-app.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10%",
    paddingBlock: "8%",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
  },
  projectItem: {
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "0.2rem",
    padding: "1rem",
  },
  imgContainer: {
    height: 250,
    maxHeight: 400,
    position: "relative",
  },
  hoverImg: {
    top: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    textDecoration: "inherit",
    color: "inherit",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    transition: "0.3s ease-in-out",
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  projectImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0.2rem",
  },
  technologiesContainer: {
    marginTop: "5px",
    gap: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  technologyItem: {
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "0.2rem",
    paddingInline: "10px",
  },
}));

const projects = [
  {
    title: "Dashboard Web",
    img: DashboardImg,
    technologies: [
      "Javascript",
      "React",
      "Axios",
      "Web3",
      "Redux",
      "Material UI",
    ],
  },
  {
    title: "Weather App",
    img: WeatherAppImg,
    github: "https://github.com/alexcostai/weather-app",
    technologies: [
      "Javascript",
      "React Native",
      "Expo",
      "Axios",
      "Material UI",
    ],
  },
];

export default function useProjectsSection() {
  const classes = useStyles();
  return [classes, projects];
}
