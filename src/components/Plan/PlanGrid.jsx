import React from "react";
import { styled } from "@mui/system";
import { Typography, Button, Stack, Grid } from "@mui/material";

const Plan = ({ name, price, features, premium }) => {
  // Container styles
  const Container = styled(Grid)({
    alignItems: "flex-start",
    backgroundColor: premium ? "#7a3199" : "#ffffff",
    border: "0.2px solid #7a3199",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "35px 27px",
    position: "relative",
    width: "fit-content",
    transition: "transform 0.2s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01,1.01)",
    },
  });

  // BasicPlan styles
  const BasicPlan = styled(Typography)({
    color: premium ? "#ffffff" : "#000000",
    fontFamily: "Inter, Helvetica",
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    whiteSpace: "nowrap",
    width: "249px",
  });

  // TextWrapper styles
  const TextWrapper = styled(Typography)({
    color: premium ? "#ffffff" : "#7a3199",
    fontFamily: "Poppins, Helvetica",
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "normal",
    marginRight: "-15px",
    position: "relative",
    width: "264px",
  });

  // Price styles
  const Price = styled(Typography)({
    color: premium ? "#ffffff" : "#7a3199",
    fontFamily: "Inter, Helvetica",
    fontSize: "32px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    width: "fit-content",
  });

  // Month styles
  const Month = styled(Typography)({
    color: premium ? "#ffffff" : "#7a3199",
    fontFamily: "Poppins, Helvetica",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    paddingLeft: "20px",
    lineHeight: "normal",
    position: "relative",
    width: "fit-content",
  });

  // StartFreeTrialButton styles
  const StartFreeTrialButton = styled(Button)({
    color: "#7a3199",
    top: "14px",
    border: "0.3px solid #7a3199",
    borderRadius: "5px",
    height: "44px",
    minWidth: "149px",
    fontFamily: "Poppins, Helvetica",
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "normal",
    textTransform: "capitalize",
    marginBottom: "20px",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "2px 2px 3px rgb(101, 49, 160)",
      border: "0.3px solid #7a3199",
      backgroundColor: "white",
    },
  });

  // FeatureList styles
  const FeatureList = styled("ul")({
    listStyleType: "disc",
    padding: 0,
    margin: 0,
    marginRight: "-15px",
    listStylePosition: "inside",
  });

  // FeatureItem styles
  const FeatureItem = styled("li")({
    color: premium ? "#ffffff" : "#000000",
    fontFamily: "Inter, Helvetica",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "normal",
    marginTop: "8px",
    position: "relative",
    width: "fit-content",
  });

  return (
    <Container className="plan">
      <BasicPlan>{name}</BasicPlan>
      <TextWrapper>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </TextWrapper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Price variant="h4" className="price">
          {price}
        </Price>
        <Month variant="body1" className="month">
          /month
        </Month>
      </Stack>
      <FeatureList className="feature-list">
        {features.map((feature, index) => (
          <FeatureItem key={index} className="feature-item">
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
      <StartFreeTrialButton variant="outlined">
        Start Free Trial
      </StartFreeTrialButton>
    </Container>
  );
};

const PlansComponent = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99",
      features: [
        "Free access to video class",
        "Access to practice exercises",
        "Limited quizzes",
      ],
      premium: false,
    },
    {
      name: "Premium Plan",
      price: "$59.99",
      features: [
        "Free access to video class",
        "Access to practice exercises",
        "Unlimited quizzes",
      ],
      premium: true,
    },
    {
      name: "Standard Plan",
      price: "$29.99",
      features: [
        "Free access to video class",
        "Access to practice exercises",
        "Personalized coaching",
      ],
      premium: false,
    },
  ];

  return (
    <Grid>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ width: "1090px", height: "340px" }}
        pt={23}
      >
        {plans.map((plan, index) => (
          <Plan
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            premium={plan.premium}
          />
        ))}
      </Stack>
    </Grid>
  );
};

export default PlansComponent;
