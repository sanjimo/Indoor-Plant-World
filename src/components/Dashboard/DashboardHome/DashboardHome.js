import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.ibb.co/0XH8Mzg/Indoor-houseplants-next-to-a-window-in-a-beautifully-designed-home-or-flat-interior.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/M6nQG6W/Indoor-gardening-indoor-jungle-with-popular-house-indoor-plants-monstera-pilea-peperomioides-boston.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/tqf2GNK/Peace-Lilies-Monstera-Calathea-Golden-Pothos-houseplants-in-gray-and-white-ceramic-flowerpots-on-woo.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/dGRw9FZ/photo-1592150621744-aca64f48394a.jpg',
  }
];

function DashboardHome() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ minWidth: 80, minHeight: 180, flexGrow: 1 , mt:0, mb:6}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  minHeight: 180,
                  height: 400,
                  display: 'block',
                  width: '100%',
                  minWidth: 80,
                  overflow: 'hidden',
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default DashboardHome;
