import { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Summary from "./components/Accordion/Summary";
// import { ReactComponent as ExpandMore } from "../../assets/New Load Page/downArrow.svg";
// import { ReactComponent as ExpandLess } from "../../assets/New Load Page/Path 4.svg";
import { ReactComponent as Plus } from "../../assets/New Load Page/PlusBtn.svg";
import { ReactComponent as ExpandIcon } from "../../assets/New Load Page/Chevron Down.svg";
import { ReactComponent as Minus } from "../../assets/New Load Page/fluent_subtract-24-filled.svg";

import { GeneralBtn1 } from "../../components/Styles/StyledBtns";
import { nanoid } from "@reduxjs/toolkit";

import FreightAccounting from "./components/FreightSection/FreightAccounting";
import Freight from "./components/FreightSection/Freight";
import AccordionDetail from "./components/Accordion/AccordionDetail";
import Header from "./components/HeaderSection/Header";

const data = [
  {
    freight: {
      search: "random1",
      name: "random2",
      insurance: "random3",
      phone: "random4",
      fax: "random5",
      pro: "random6",
      rc: "random7",
    },
    dispatch: {
      name: "random1",
      phone: "random2",
      email: "random3",
      afterHoursName: "random4",
      afterHoursPhone: "random5",
      comment: "random6",
    },
    accounting: {
      apFee: "$00.00",
    },
    drivers: [
      {
        name: "ahmed",
        mobilePhone: "01565546",
        alternatePhone: "021021",
        location: "cairo",
        palets: "dfdaf",
        tractor: "sfdf",
        trailer: "dfdas",
        equipment: "adfa",
        equipmentSize: "afdf",
      },
      {
        name: "marc",
        mobilePhone: "757547",
        alternatePhone: "04124",
        location: "london",
        palets: "Palets ",
        tractor: "tractor",
        trailer: "trailer",
        equipment: "equipment",
        equipmentSize: "equipmentSize",
      },
    ],
    notes: "",
    docs: [""],
  },
  {
    freight: {
      search: "random1",
      name: "random2",
      insurance: "random3",
      phone: "random4",
      fax: "random5",
      pro: "random6",
      rc: "random7",
    },
    dispatch: {
      name: "random1",
      phone: "random2",
      email: "random3",
      afterHoursName: "random4",
      afterHoursPhone: "random5",
      comment: "random6",
    },
    accounting: {
      apFee: "$00.00",
    },
    drivers: [
      {
        name: "ahmed",
        mobilePhone: "01565546",
        alternatePhone: "021021",
        location: "cairo",
        palets: "dfdaf",
        tractor: "sfdf",
        trailer: "dfdas",
        equipment: "adfa",
        equipmentSize: "afdf",
      },
      {
        name: "marc",
        mobilePhone: "757547",
        alternatePhone: "04124",
        location: "london",
        palets: "Palets ",
        tractor: "tractor",
        trailer: "trailer",
        equipment: "equipment",
        equipmentSize: "equipmentSize",
      },
    ],
    notes: "",
    docs: [""],
  },
];

const Load = () => {
  const [carriers, setCarriers] = useState(data);
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : null);
  };
  const handleAccordionSummaryClick = (event) => {
    event.stopPropagation();
  };

  const handleAddCarrier = () => {
    const newCarrier = {
      freight: {
        search: "",
        name: "",
        insurance: "",
        phone: "",
        fax: "",
        pro: "",
        rc: "",
      },
      dispatch: {
        name: "",
        phone: "",
        email: "",
        afterHoursName: "",
        afterHoursPhone: "",
        comment: "",
      },
      accounting: {
        apFee: "$00.00",
      },
      drivers: [
        {
          name: "",
          mobilePhone: "",
          alternatePhone: "",
          location: "",
          palets: "",
          tractor: "",
          trailer: "",
          equipment: "",
          equipmentSize: "",
        },
        {
          name: "",
          mobilePhone: "",
          alternatePhone: "",
          location: "",
          palets: " ",
          tractor: "",
          trailer: "",
          equipment: "",
          equipmentSize: "",
        },
      ],
      notes: "",
      docs: [""],
    };
    setCarriers([newCarrier, ...carriers]);
    setExpanded(0);
  };
  const handleDeleteCarrier = (event, index) => {
    event.stopPropagation();
    const newCarriers = [...carriers];
    newCarriers.splice(index, 1);
    setCarriers(newCarriers);
    setExpanded(null);
  };
  return (
    <Box sx={{ width: "100%", padding: 1, background: "#F9F9F9" }}>
      <Stack spacing={2}>
        <Header />

        <Grid container>
          <Grid item xs={expanded ? 9 : 12}>
            <Freight />
          </Grid>
          {expanded ? (
            <Grid item xs={3}>
              <FreightAccounting />
            </Grid>
          ) : null}
        </Grid>

        <Box>
          <GeneralBtn1
            variant="contained"
            startIcon={<Plus />}
            onClick={handleAddCarrier}
          >
            Add Carrier
          </GeneralBtn1>
        </Box>

        <Box>
          {carriers.map((carrier, index) => {
            return (
              <Box key={nanoid()} marginBottom={2}>
                <Accordion
                  expanded={expanded === index}
                  onChange={handleAccordionChange(index)}
                  sx={{
                    background: "#FFFFFF",
                    boxShadow:
                      "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                    borderRadius: "8px",
                  }}
                >
                  <AccordionSummary
                    sx={{
                      "&.MuiAccordionSummary-root": {
                        pointerEvents: "none",
                      },
                      "&.Mui-expanded": {
                        bgcolor: grey[200],
                      },
                    }}
                    onClick={handleAccordionSummaryClick}
                    expandIcon={
                      <IconButton sx={{ pointerEvents: "auto" }}>
                        <ExpandIcon />
                      </IconButton>
                    }
                  >
                    {expanded === index ? (
                      <Box sx={{ pointerEvents: "auto" }}>
                        <GeneralBtn1
                          onClick={(event) => handleDeleteCarrier(event, index)}
                          variant="contained"
                          sx={{ marginRight: 1 }}
                          startIcon={<Minus />}
                        >
                          remove carrier
                        </GeneralBtn1>
                        <GeneralBtn1
                          onClick={handleAccordionSummaryClick}
                          variant="contained"
                          sx={{ marginRight: 1 }}
                        >
                          rate confirmation
                        </GeneralBtn1>

                        <GeneralBtn1
                          variant="contained"
                          onClick={handleAccordionSummaryClick}
                        >
                          AP
                        </GeneralBtn1>
                      </Box>
                    ) : (
                      <Box
                        display="flex"
                        width="90%"
                        justifyContent="space-between"
                      >
                        <Summary
                          title="Carrier"
                          detail="ASAP TRANS CORP (38243) Homeglen, IL"
                        />
                        <Summary title="Dispatch" detail="Truck 320" />
                        <Summary title="Accounting" detail="Total: $2120.00" />
                      </Box>
                    )}
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: grey[200] }}>
                    <AccordionDetail carrier={carrier} />
                  </AccordionDetails>
                </Accordion>
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default Load;

//  below is the code which should be ignored as it was the an old iteration, would be deleted in final production

/* <Paper
  elevation={0}
  sx={
    expand
      ? { p: 2, background: grey[200] }
      : {
          p: 2,
          background: "#FFFFFF",
          boxShadow:
            "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
          borderRadius: "8px",
        }
  }
>
  <Stack spacing={2}>
    
    <Box display="flex" justifyContent="space-between" height="30px">
      {expand ? (
        <Box display="inline-flex" alignItems="center" gap={2}>
          <GeneralBtn1
            variant="contained"
            disabled
            startIcon={<Minus />}
          >
            Remove Carrier
          </GeneralBtn1>
          <GeneralBtn1 variant="contained">
            Rate Confirmation
          </GeneralBtn1>
        </Box>
      ) : (
        <>
          <Summary
            title="Carrier"
            detail="ASAP TRANS CORP (38243) Homeglen, IL"
          />
          <Summary title="Dispatch" detail="Truck 320" />
          <Summary title="Accounting" detail="Total: $2120.00" />
        </>
      )}

      <IconButton
        onClick={handleClick}
        sx={{ height: "30px", width: "30px" }}
      >
        {expand ? (
          <ExpandLess fontSize={25} />
        ) : (
          <ExpandMore fontSize={25} />
        )}
      </IconButton>
    </Box>

    {expand ? <AccordionDetail /> : null}
  </Stack>
</Paper> */
