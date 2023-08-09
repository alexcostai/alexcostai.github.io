import { useEffect, useRef, useState } from "react";
//mui
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pattern: {
    top: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    opacity: "0.99",
    zIndex: -1,
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary.dark,
  },
  mainContainer: {
    width: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function useHomePage() {
  const classes = useStyles();
  const topRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  const [hidesToTop, setHidesToTop] = useState(true);
  const references = {
    top: topRef,
    projects: projectsRef,
    aboutMe: aboutMeRef,
    contact: contactRef,
  };
  const scrollTo = (refName) => {
    references[refName].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0 && !hidesToTop) {
        setHidesToTop(true);
      } else if (hidesToTop) {
        setHidesToTop(false);
      }
    };
  });

  return [classes, references, scrollTo, hidesToTop];
}
