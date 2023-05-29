import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./components/Header";
import GeneralSection from "./components/generla-section";
import AuthoritySection from "./components/authority";
import BasicsSection from "./components/basics";
import USInspections from "./components/USInspections";
import SafetySection from "./components/safety";
import { SubmitBtn } from "../../components/Styles/StyledBtns";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReviewCarrier() {
  const params = useParams();
  useEffect(() => {
    axios({
      method: "POST",
      url: "https://api.mycarrierpackets.com/api/v1/Carrier/GetCarrierData",
      headers: {
        Authorization: process.env.REACT_APP_MY_Packet_Token,
      },
      data: {
        DOTNumber: 51234,
      },
    }).then((res) => console.log({ res }));
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        padding: 1,
      }}
    >
      <Stack spacing={4}>
        <Header />

        <Grid container justifyContent="space-between">
          <GeneralSection />
          <AuthoritySection />
        </Grid>
        <BasicsSection />
        <USInspections />
        <SafetySection />
        <Grid container justifyContent="space-between">
          <SubmitBtn>Manual Setup</SubmitBtn>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ReviewCarrier;
