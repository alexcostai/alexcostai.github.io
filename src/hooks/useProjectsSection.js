//mui
import { makeStyles } from "@mui/styles";
//project imports
import DashboardImg from "@/../public/images/projects/dashboard.png";

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
  projectImg: {
    width: "100%",
    height: "auto",
    borderRadius: "0.2rem",
    objectFit: "contain",
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
    img: DashboardImg,
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
