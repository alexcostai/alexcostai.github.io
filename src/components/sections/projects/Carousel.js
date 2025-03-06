import * as React from "react";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
//mui
import { makeStyles, useTheme } from "@mui/styles";
import { Button, MobileStepper, Box } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    position: "relative",
  },
  imageContainer: {
    height: "100%",
    display: "flex",
  },
  image: {
    width: "100%",
    height: "auto",
    height: "40vh",
    objectFit: "contain",
  },
  mobileStepper: {
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "end !important",
    background: "transparent !important",
  },
  actionBtn: {
    height: "100%",
  },
}));

export default function Carousel({ images }) {
  const theme = useTheme();
  const classes = useStyles();
  const maxSteps = images.length;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.container}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoplay={false}
      >
        {images.map((image, idx) => (
          <div key={idx}>
            {Math.abs(activeStep - idx) <= 2 ? (
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={image}
                  alt={`Project-Image-${idx}`}
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            className={classes.actionBtn}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            className={classes.actionBtn}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}
