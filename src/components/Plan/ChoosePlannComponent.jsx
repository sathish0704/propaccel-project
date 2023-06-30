import React from "react";
import { Grid, Stack } from "@mui/material";
import PlansComponent from "./PlanGrid";
import styled from "@emotion/styled";

// TextWrapper8 styles
const TextWrapper8 = styled.div`
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;

// LoremIpsum4 styles
const LoremIpsum4 = styled.p`
  color: #000000;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 455px;
`;

// RadioContainer styles
const RadioContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 30px #9a949440;
  display: flex;
  gap: 10px;
  height: 37px;
  padding: 6px 16px 6px 6px;
  position: relative;
  width: fit-content;
`;

// Frame9 styles
const Frame9 = styled.div`
  align-items: center;
  background-color: #e1a5ff66;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: -1px;
  margin-top: -1px;
  padding: 3px 9px;
  position: relative;
  width: fit-content;
`;

// TextWrapper9 styles
const TextWrapper9 = styled.div`
  cursor: pointer;
  color: #000000;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
`;

// TextWrapper10 styles
const TextWrapper10 = styled.div`
  cursor: pointer;
  color: #000000;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: fit-content;
`;

const ChoosePlannComponent = () => {
  return (
    <Grid sx={{ width: "1440px", height: "785px" }}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={7}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
          pt={1}
        >
          <TextWrapper8>Choose your plan</TextWrapper8>
          <LoremIpsum4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </LoremIpsum4>

          <RadioContainer>
            <Frame9>
              <TextWrapper9>monthly</TextWrapper9>
            </Frame9>
            <TextWrapper10>yearly</TextWrapper10>
          </RadioContainer>
        </Stack>
        <PlansComponent />
      </Stack>
    </Grid>
  );
};

export default ChoosePlannComponent;
