import React from "react";
import NavBarComponent from "./NavBar";
import LandingPage from "./LandingPage";
import { Container } from "@mui/material";
import { Grid } from "@material-ui/core";
import Courselayout from "./Course/CourseGrid";
import Plans from "./Plan/Plans";
import FooterComponent from "./Footer";
import ReviewGridLayout from "./Reviews/ReviewGridLayout";

const HomeScreenLayout = () => {
  const containerStyles = {
    position: "relative",
  };

  const backgroundStyles = {
    backgroundImage: `url('https://ik.imagekit.io/sathish2267/propaccel/polygon-1.svg?updatedAt=1688035689598'), 
    url('https://ik.imagekit.io/sathish2267/propaccel/polygon-1-1.svg?updatedAt=1688035689620')`,
    backgroundPosition: "88% 0%, 0% 0%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto,",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  const backgroundStyles2 = {
    backgroundImage: `url('https://ik.imagekit.io/sathish2267/propaccel/pngwing-1.png?updatedAt=1688035689558')`,
    backgroundPosition: "94% 69%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "490px,471px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "58%",
    zIndex: -1,
  };

  const ellipseStyles = {
    backgroundColor: "#7a3199",
    borderRadius: "465.5px/425px",
    height: "850px",
    left: -440,
    position: "absolute",
    bottom: "50%",
    right: "30%",
    top: "-13.5%",
    width: "931px",
    zIndex: -1,
    overflow: "hidden",
  };

  return (
    <Container maxWidth="xl" style={containerStyles} sx={{ overflow: "auto" }}>
      {/* Background grids */}
      <Grid style={backgroundStyles}></Grid>
      <Grid style={ellipseStyles} />
      <Grid style={backgroundStyles2} />
      {/* Component arrangements */}
      <NavBarComponent /> {/* Navigation bar */}
      <LandingPage /> {/* Landing page */}
      <Courselayout /> {/* Course layout */}
      <Plans /> {/* Plans */}
      <ReviewGridLayout /> {/* Review grid layout */}
      <FooterComponent /> {/* Footer */}
    </Container>
  );
};

export default HomeScreenLayout;
