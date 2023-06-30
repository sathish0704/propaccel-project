import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

// Styled component for the main container
const FrameContainer = styled(Box)(() => ({
  alignItems: "center",
  backgroundColor: "#ffffff",
  border: "0.3px solid  #e1a5ff66",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
  padding: "36px 48px",
  position: "relative",
  width: "fit-content",
  transition: "border 0.5s, transform 0.5s",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  "&:hover": {
    transform: "scale(1.03,1.03)",
    border: "2px solid  #e1a5ff66",
  },
}));

// Styled component for a div
const Div2 = styled("div")(() => ({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  position: "relative",
  width: "fit-content",
}));

// Styled component for a div
const Div3 = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  gap: "24px",
  position: "relative",
  width: "fit-content",
}));

// Styled component for an image
const LollaImage = styled("img")({
  height: "70px",
  minWidth: "70px",
  objectFit: "cover",
  position: "relative",
});

// Styled component for a div
const Div4 = styled("div")(() => ({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "relative",
  width: "fit-content",
}));

// Styled component for a div
const LollaSmith = styled("div")({
  color: "#000000",
  fontFamily: "Inter, Helvetica",
  fontSize: "16px",
  fontWeight: 700,
  height: "16px",
  letterSpacing: 0,
  lineHeight: "normal",
  marginTop: "-1px",
  position: "relative",
  whiteSpace: "nowrap",
  width: "88px",
});

// Styled component for a div
const Microsoft = styled("div")({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: "14px",
  fontWeight: 400,
  height: "16px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  whiteSpace: "nowrap",
  width: "65px",
});

// Styled component for an image
const FrameImage = styled("img")({
  height: "20px",
  maxWidth: "132px",
  position: "relative",
});

// Styled component for a paragraph
const FrameText = styled("p")({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  width: "369px",
});

// ReviewGrid component
const ReviewGrid = ({
  frame = "https://ik.imagekit.io/sathish2267/propaccel/frame-20-3.svg?updatedAt=1688016921882",
}) => {
  return (
    <FrameContainer>
      <Div2>
        <Div3>
          <LollaImage
            alt="Lolla"
            src="https://ik.imagekit.io/sathish2267/icon12.png?updatedAt=1675751810202"
          />
          <Div4>
            <LollaSmith>Sathish Kumar</LollaSmith>
            <Microsoft>Google</Microsoft>
            <FrameImage alt="Frame" src={frame} />
          </Div4>
        </Div3>
        <FrameText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </FrameText>
      </Div2>
    </FrameContainer>
  );
};

export default ReviewGrid;
