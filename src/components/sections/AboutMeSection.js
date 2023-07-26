//mui
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10%",
    paddingBlock: "8%",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
  },
  toolsContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "0.2rem",
    [theme.breakpoints.down("680")]: {
      order: 1,
      justifyContent: "center",
    },
  },
  detailContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column !important",
    [theme.breakpoints.down("680")]: {
      order: 0,
    },
  },
}));

const tools = [
  "React Native",
  "Javascript",
  "React.js",
  "Next.js",
  "Expo",
  "Web3",
  "Redux",
  "Material UI",
];

export default function ({ reference }) {
  const theme = useTheme();
  const classes = useStyles();
  const matchDown680 = useMediaQuery(theme.breakpoints.down("680"));
  return (
    <Grid ref={reference} container className={classes.container} gap={5}>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Sobre Mí
        </Typography>
      </Grid>
      <Grid item xs={matchDown680 ? 12 : 4} className={classes.toolsContainer}>
        <ul
          style={{ display: matchDown680 ? "flex" : "block", flexWrap: "wrap" }}
        >
          {tools.map((tool) => (
            <li key={tool} style={{ marginRight: "30px" }}>
              {tool}
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={matchDown680 ? 12 : 6} className={classes.detailContainer}>
        <Typography variant="h6">
          Me considero una persona creativa y proactiva, siempre en busca de
          soluciones innovadoras para los desafíos que se presentan en el
          desarrollo front-end.
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Estoy en constante aprendizaje para mejorar mis aptitudes tanto
          laborales como personales.
        </Typography>
      </Grid>
    </Grid>
  );
}
