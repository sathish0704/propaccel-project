import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChoosePlannComponent from "../../components/Plan/ChoosePlannComponent";

// Wrapper styles
const Wrapper = styled(Grid)(() => ({
  height: "691px",
  position: "relative",
  width: "1440px",
}));

// BackGroundGrid styles
const BackGroundGrid = styled(Grid)(() => ({
  height: "568px",
  left: "0",
  position: "absolute",
  top: "0",
  width: "1479px",
}));

// Line styles
const Line = styled("img")(() => ({
  height: "531px",
  left: "0",
  position: "absolute",
  top: "0",
  width: "1437px",
}));

// Line2 styles
const Line2 = styled("img")(() => ({
  height: "531px",
  left: "1px",
  position: "absolute",
  top: "18px",
  width: "1436px",
}));

// Line3 styles
const Line3 = styled("img")(() => ({
  height: "531px",
  left: "2px",
  position: "absolute",
  top: "37px",
  width: "1435px",
}));

// H1 styles
const H1 = styled(Typography)(() => ({
  color: "#eeeeee",
  fontFamily: "Poppins, Helvetica",
  fontSize: "150px",
  fontWeight: 700,
  left: "836px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  top: "119px",
  whiteSpace: "nowrap",
  width: "641px",
}));

const Plans = () => {
  return (
    <Wrapper mb={3}>
      <BackGroundGrid>
        <Line
          className="line"
          alt="Line"
          src="https://ik.imagekit.io/sathish2267/propaccel/line-1.svg?updatedAt=1688034793533"
        />
        <Line2
          className="line-2"
          alt="Line"
          src="https://ik.imagekit.io/sathish2267/propaccel/line-1.svg?updatedAt=1688034793533"
        />
        <Line3
          className="line-3"
          alt="Line"
          src="https://ik.imagekit.io/sathish2267/propaccel/line-1.svg?updatedAt=1688034793533"
        />
        <H1 variant="h1">Podcast</H1>
      </BackGroundGrid>
      <ChoosePlannComponent />
    </Wrapper>
  );
};

export default Plans;
