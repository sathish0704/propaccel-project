import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, Stack } from '@mui/material';
import styled from '@emotion/styled';

const NavbarButton1 = styled(Button)({
  color: "#ffffff",
  fontFamily: "Inter, Helvetica!important",
  fontSize: "16px",
  fontWeight: '700',
  textTransform: "capitalize",
});

const NavbarButton2 = styled(Button)({
  textTransform: "capitalize",
  color: "#ffffff",
  fontFamily: "Inter, Helvetica",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "0",
  lineHeight: "normal",  
  marginRight:"70px"
});


const NavBarComponent = () => {
  return (
    <Container maxWidth={"lg"}> 
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} height={"91px"}>
      <NavbarButton1>Podcast.com</NavbarButton1>
      <Grid spacing={10} >
        <NavbarButton2 >About</NavbarButton2>
        <NavbarButton2 >Pricing</NavbarButton2>
        <NavbarButton2 >Review</NavbarButton2>
      </Grid>
    </Stack>
    </Container>
  );
};

export default NavBarComponent;
