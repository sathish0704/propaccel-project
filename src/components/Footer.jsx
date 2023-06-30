import React from "react";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import { Facebook, YouTube, Instagram, Twitter } from "@mui/icons-material";

const Footer = styled(Grid)({
  // Footer background image
  backgroundImage:
    "url(https://ik.imagekit.io/sathish2267/propaccel/polygon-2.svg?updatedAt=1688043863370)",
  backgroundSize: "100% 102%",
  height: "493px",
  width: "1440px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
});

const FooterInner = styled(Stack)({
  // Footer inner container
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "64px",
  flexWrap: "wrap",
  height: "493px",
  width: "1440px",
});

const FooterContentText = styled(Grid)({
  // Footer content text container
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "24px",
  position: "relative",
  width: "fit-content",
});

const FooterContentHeaderText = styled(Typography)({
  // Footer content header text
  color: "black",
  fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: "normal",
  marginTop: "-1px",
  position: "relative",
  width: "fit-content",
});

const FooterContentText2 = styled(Typography)({
  // Footer content text
  WebkitBackgroundClip: "text !important",
  WebkitTextFillColor: "transparent",
  background:
    "linear-gradient(180deg, rgb(71, 118, 230) 0%, rgb(142, 84, 233) 100%)",
  backgroundClip: "text",
  color: "transparent",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  textAlign: "center",
  width: "596px",
});

const FooterBottomText1 = styled(Typography)({
  // Footer bottom text 1
  color: "#ffffff",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  width: "fit-content",
});

const FooterBottomText2 = styled(Typography)({
  // Footer bottom text 2
  color: "#ffffff",
  fontFamily: "Poppins, Helvetica",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  marginTop: "-1px",
  position: "relative",
  width: "fit-content",
});

const FooterCenter = styled(Grid)({
  // Footer center container
  alignItems: "center",
  display: "flex",
  gap: "64px",
  position: "relative",
  width: "fit-content",
});

const FooterCenterTexts = styled(Grid)({
  // Footer center text container
  alignItems: "flex-start",
  display: "flex",
  gap: "24px",
  position: "relative",
  width: "fit-content",
});

const ButtonWrapper = styled(Button)({
  // Footer button wrapper
  background:
    "linear-gradient(180deg, rgb(71, 118, 230) 0%, rgb(142, 84, 233) 100%)",
  borderRadius: "10px",
  height: "60px",
  minWidth: "237px",
  position: "relative",
  textAlign: "center",
  color: "#ffffff",
  fontFamily: "Poppins, Helvetica",
  fontSize: "20px",
  fontWeight: 700,
  textTransform: "capitalize",
  width: "fit-content",
  letterSpacing: "0",
  lineHeight: "normal",
  transition: "transform 0.2s",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05,1.05)",
  },
});

const FooterComponent = () => {
  return (
    <Container maxWidth={"xl"}>
      <Footer>
        <FooterInner pb={13}>
          <FooterContentText>
            <FooterContentHeaderText>
              We have what you’re looking for
            </FooterContentHeaderText>

            <FooterContentText2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type a
            </FooterContentText2>
          </FooterContentText>
          <ButtonWrapper>Get Started Now</ButtonWrapper>
        </FooterInner>

        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width="995px"
          height="74px"
          spacing={5}
          p={2}
          sx={{
            borderColor: "#ffffff",
            borderTopStyle: "solid",
            borderTopWidth: "0.1px",
            color: "#ffffff",
            position: "absolute",
            bottom: 0,
          }}
        >
          <FooterBottomText1>
            All Right Reserved © 2023
          </FooterBottomText1>

          <FooterCenter>
            <FooterCenterTexts>
              <FooterBottomText2>Terms of Service</FooterBottomText2>
              <FooterBottomText2>Privacy Policy</FooterBottomText2>
              <FooterBottomText2>Product</FooterBottomText2>
            </FooterCenterTexts>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton>
                <Facebook sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <YouTube sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Twitter sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </FooterCenter>
        </Stack>
      </Footer>
    </Container>
  );
};

export default FooterComponent;
