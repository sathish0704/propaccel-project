import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Container } from "@material-ui/core";

const CourseContainer = styled(Box)(({ theme }) => ({
  alignItems: "flex-start",
  border: `0.5px solid #7a3199`,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  overflow: "hidden",
  padding: theme.spacing(3),
  position: "relative",
  width: "fit-content",
  transition: "all 0.5s",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05,1.05)",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  },
}));

const InteractiveFeatures = styled(Typography)({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: 20,
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  width: "fit-content",
});

const LoremIpsum = styled(Typography)({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  width: 208,
});

const Course2 = styled(Grid)({
  height: "397px",
  position: "relative",
  top: "49px",
  width: "552px",
  right: 40,
});

const Frame7 = styled(Grid)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  justifyContent: "center",
  position: "relative",
  width: "fit-content",
});

const Title = styled(Grid)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  position: "relative",
  width: "fit-content",
});

const TextWrapper4 = styled(Typography)({
  color: "#000000",
  fontFamily: "Inter, Helvetica",
  fontSize: "48px",
  fontWeight: 700,
  letterSpacing: "0",
  lineHeight: "normal",
  marginTop: "-1px",
  position: "relative",
  width: "fit-content",
});

const LoremIpsumIs2 = styled(Typography)({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0",
  lineHeight: "normal",
  position: "relative",
  width: "367px",
});

const ButtonWrapper = styled(Grid)({
  background:
    "linear-gradient(180deg, rgb(71, 118, 230) 0%, rgb(142, 84, 233) 100%)",
  borderRadius: "10px",
  height: "60px",
  minWidth: "237px",
  position: "relative",
});

const TextWrapper5 = styled("button")({
  color: "#ffffff",
  fontFamily: "Poppins, Helvetica",
  fontSize: "20px",
  fontWeight: 700,
  left: "56px",
  position: "absolute",
  width: "fit-content",
  background: "none",
  border: "none",
  letterSpacing: "0",
  lineHeight: "normal",
  top: "14px",
  transition: "transform 0.2s",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05,1.05)",
  },
});

const CourseGrid = () => {
  return (
    <Grid>
      <CourseContainer>
        <InteractiveFeatures variant="h6">
          Interactive Features
        </InteractiveFeatures>
        <LoremIpsum>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </LoremIpsum>
      </CourseContainer>
    </Grid>
  );
};

const Courselayout = () => {
  return (
    <Container maxWidth={"lg"}>
      <Stack direction={"row"} height="525px" justifyContent={"space-evenly"}>
        <Course2>
          <Stack direction={"row"} spacing={1} gap={1}>
            <Stack direction={"column"} spacing={5} gap={2}>
              <CourseGrid />
              <CourseGrid />
            </Stack>
            <Stack direction={"column"} spacing={5} pt={5} gap={2}>
              <CourseGrid />
              <CourseGrid />
            </Stack>
          </Stack>
        </Course2>

        <Frame7>
          <Title>
            <TextWrapper4>About the Course</TextWrapper4>
            <LoremIpsumIs2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unkno
            </LoremIpsumIs2>
          </Title>
          <ButtonWrapper>
            <TextWrapper5>Explore Now</TextWrapper5>
          </ButtonWrapper>
        </Frame7>
      </Stack>
    </Container>
  );
};

export default Courselayout;
