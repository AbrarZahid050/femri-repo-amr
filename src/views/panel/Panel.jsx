import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrier from "../carrier/Carrier";
import Customer from "../customer/Customer";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import SideDrawer from "../sideDrawer/SideDrawer";
import User from "../../views/user/User";
import { Stack } from "@mui/material";
import Profile from "../Profile/Profile";
import SendFeedback from "../sendFeedback/SendFeedback";
import Terms from "../termsAndConditions/Terms";
import PrivatePolicy from "../termsAndConditions/PrivatePolicy";
import Subs from "../subs/Subs";

const Panel = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" overflow="auto" sx={{ bgcolor: "#FAFAFA" }}>
        <SideDrawer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sendfeedback" element={<SendFeedback />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<PrivatePolicy />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/user" element={<User />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Stack>
    </>
  );
};

export default Panel;
