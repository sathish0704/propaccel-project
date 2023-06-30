import { Grid, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const LandingPage = () => {
  const LandingPageContainer = styled(Grid)({
    height: 652,
    width: 1439,
  });

  const InnerGrid = styled(Grid)({
    height: 462,
    position: "relative",
    top: 94,
    width: 1240,
  });

  const ContentGrid = styled(Grid)({
    height: 371,
    width: 580,
  });

  const TextGrid = styled(Grid)({
    height: 214,
    width: 584,
  });

  const LandingPagePara = styled(Typography)({
    color: "#ffffff",
    fontFamily: "Inter, Helvetica",
    fontSize: "16px",
    fontWeight: 400,
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "relative",
    top: "48px",
    width: 433,
  });

  const LandingPageText2 = styled(Typography)({
    color: "#ffffff",
    fontFamily: "Inter, Helvetica",
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    width: 580,
  });

  const DivWrapperButton = styled(Button)({
    background:
      "linear-gradient(180deg, rgb(71, 118, 230) 0%, rgb(142, 84, 233) 100%)",
    borderRadius: "10px",
    height: "75px",
    left: 0,
    position: "relative",
    top: 80,
    width: "237px",
    color: "#ffffff",
    fontFamily: "Poppins, Helvetica",
    fontSize: "20px",
    fontWeight: 700,
    textAlign: "center",
    transition: "transform 0.2s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05,1.05)",
    },
  });

  const LandingPageImage1 = styled("img")({
    height: "370px",
    left: "599px",
    position: "absolute",
    top: "60px",
    width: "550px",
  });

  const LandingPageImage2 = styled("img")({
    height: "281px",
    left: "598px",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    width: "491px",
  });

  const LandingPageImage3 = styled("img")({
    height: "281px",
    left: "545px",
    objectFit: "cover",
    position: "absolute",
    top: "90px",
    width: "491px",
  });

  const LandingPageImage4 = styled("img")({
    height: "154px",
    left: "1023px",
    position: "absolute",
    top: "308px",
    width: "155px",
  });

  const LandingPageImage5 = styled("img")({
    height: "159px",
    left: "1081px",
    position: "absolute",
    top: "123px",
    width: "159px",
    mixBlendMode: "multiply",
    borderRadius: "100%",
  });

  return (
    <Container maxWidth={"lg"}>
      <LandingPageContainer>
        <InnerGrid>
          <Grid position={"relative"}>
            <Grid md={12}>
              <ContentGrid>
                <TextGrid>
                  <LandingPageText2>
                    Learn how to launch a successful podcast
                  </LandingPageText2>
                  <LandingPagePara>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </LandingPagePara>
                </TextGrid>
                <DivWrapperButton> Sign up Now </DivWrapperButton>
              </ContentGrid>
            </Grid>
            <Grid md={12}>
              <LandingPageImage1
                alt="Group"
                src="https://ik.imagekit.io/sathish2267/propaccel/group-75.png?updatedAt=1688035281970"
              />
              <LandingPageImage2
                alt="Everyone is smiling"
                src="https://ik.imagekit.io/sathish2267/propaccel/everyone-is-smiling-listens-group-people-business-conference-mod_2x.png?updatedAt=1688035282217"
              />
              <LandingPageImage3
                alt="Group business"
                src="https://ik.imagekit.io/sathish2267/propaccel/group-business-workers-smiling-happy-confident-working-together-_2x__1_.png?updatedAt=1688035282286"
              />
              <LandingPageImage4
                alt="Streamline computer"
                src="https://ik.imagekit.io/sathish2267/propaccel/streamline-computer-voice-mail-mic-audio-mike-music-microphone.svg?updatedAt=1688035282108"
              />
              <LandingPageImage5
                alt="Solar podcast"
                src="https://ik.imagekit.io/sathish2267/propaccel/solar-podcast-outline.svg?updatedAt=1688035282094"
              />
            </Grid>
          </Grid>
        </InnerGrid>
      </LandingPageContainer>
    </Container>
  );
};

export default LandingPage;
