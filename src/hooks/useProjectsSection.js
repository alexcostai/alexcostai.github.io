import { useState } from "react";
//mui
import { makeStyles } from "@mui/styles";
//project imports
//dashboard-web-images
import DashboardImg1 from "@/../public/images/projects/dashboard-web/1.png";
import DashboardImg2 from "@/../public/images/projects/dashboard-web/2.png";
import DashboardImg3 from "@/../public/images/projects/dashboard-web/3.png";
import DashboardImg4 from "@/../public/images/projects/dashboard-web/4.png";
import DashboardImg5 from "@/../public/images/projects/dashboard-web/5.png";
import DashboardImg6 from "@/../public/images/projects/dashboard-web/6.png";
import DashboardImg7 from "@/../public/images/projects/dashboard-web/7.png";
import DashboardImg8 from "@/../public/images/projects/dashboard-web/8.png";
import DashboardImg9 from "@/../public/images/projects/dashboard-web/9.png";
import DashboardImg10 from "@/../public/images/projects/dashboard-web/10.png";
import DashboardImg11 from "@/../public/images/projects/dashboard-web/11.png";
import DashboardImg12 from "@/../public/images/projects/dashboard-web/12.png";
import DashboardImg13 from "@/../public/images/projects/dashboard-web/13.png";
import DashboardImg14 from "@/../public/images/projects/dashboard-web/14.png";
//color-selector-images
import ColorSelectorImg from "@/../public/images/projects/color-tester/1.png";
//cirujano-ml-images
import CirujanoMLImg1 from "@/../public/images/projects/cirujano-ml/1.png";
import CirujanoMLImg2 from "@/../public/images/projects/cirujano-ml/2.png";
import CirujanoMLImg3 from "@/../public/images/projects/cirujano-ml/3.png";
import CirujanoMLImg4 from "@/../public/images/projects/cirujano-ml/4.png";
import CirujanoMLImg5 from "@/../public/images/projects/cirujano-ml/5.png";
//weather-app-images
import WeatherAppImg1 from "@/../public/images/projects/weather-app/1.png";
import WeatherAppImg2 from "@/../public/images/projects/weather-app/2.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10%",
    paddingBlock: "8%",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
  },
}));

const projects = [
  {
    type: "Trabajo - Desarrollo FrontEnd",
    title: "Dashboard Web",
    images: [
      DashboardImg1,
      DashboardImg2,
      DashboardImg3,
      DashboardImg4,
      DashboardImg5,
      DashboardImg6,
      DashboardImg7,
      DashboardImg8,
      DashboardImg9,
      DashboardImg10,
      DashboardImg11,
      DashboardImg12,
      DashboardImg13,
      DashboardImg14,
    ],
    description:
      "Plataforma de administración para los módulos correspondientes, donde permite que los administradores puedan modificar parámetros y contenido de la aplicación, adicionalmente los usuarios van a poder hacer el proceso de onboarding en la misma y poder operar con todos los módulos habilitados.",
    descriptionDots: [
      "Crypto Wallet: Venta privada de tokens del proyecto, con integración de wallet para que los usuarios se creen o ingreses su billetera digital, los usuarios además van a poder comprar, enviar y recibir estos tokens.",
      "Beneficios: Programa de beneficios para que los usuarios puedan reclamarlos. Del lado de administrador se pueden gestionar los beneficios.",
      "Tickets: Gestión de eventos con NFTickets. Se puede generar un evento desde el panel de administrador.",
      "Real Estate: Incorporación de propiedades para inversión total o parcial. El administrador puede gestionar las propiedades.",
      "NFT: Generación y venta de NFT's",
    ],
    technologies: ["javascript", "react", "axios", "web3", "redux", "mui"],
  },
  {
    type: "Trabajo - Desarrollo FrontEnd",
    title: "Color Tester",
    images: [ColorSelectorImg],
    description:
      "Probador de estilos para facilitarle al cliente la selección de color para el Dashboard Web.",
    technologies: ["javascript", "react", "redux", "mui"],
  },
  {
    type: "Trabajo - Desarrollo FrontEnd",
    title: "Cirujano ML",
    images: [
      CirujanoMLImg1,
      CirujanoMLImg2,
      CirujanoMLImg3,
      CirujanoMLImg4,
      CirujanoMLImg5,
    ],
    description:
      "Aplicación informativa para un centro de cirugías. La aplicación se desarrolló para Android e iOS.",
    descriptionDots: [
      "Obtención de información sobre los doctores, el centro y servicios que ofrecen.",
      "Galería de imágenes del consultorio.",
      "Reservación de un turno para realizarse una cirugía.",
    ],
    technologies: ["javascript", "reactnative", "firebase", "css3"],
  },
  {
    type: "Práctica - Desarrollo FrontEnd",
    title: "Weather App",
    images: [WeatherAppImg1, WeatherAppImg2],
    description:
      "Weather App es una aplicación de código abierto que le proporciona actualizaciones meteorológicas en tiempo real. Con esta aplicación, siempre sabrá qué esperar del clima, para que pueda planificar su día.",
    descriptionDots: [
      "Actualizaciones meteorológicas en tiempo real: Obtené un pronóstico detallado para los próximos 3 días.",
      "Pronósticos detallados por hora y por día: Obtené las últimas condiciones meteorológicas para tu ubicación actual o cualquier otra ciudad del mundo.",
    ],
    github: "https://github.com/alexcostai/weather-app",
    technologies: ["javascript", "reactnative", "expo", "axios", "css3"],
  },
];

export default function useProjectsSection() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return [
    classes,
    projects,
    openDrawer,
    setOpenDrawer,
    selectedProject,
    setSelectedProject,
  ];
}
