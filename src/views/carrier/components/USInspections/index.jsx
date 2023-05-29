import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import InspectionTypeTable from "./inspectionTypeTable";
import USCrashesTable from "./ USCrashes";

function USInspections() {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
        marginBottom: "50px",
      }}
    >
      {/* main grid */}
      <Grid>
        {/* column 1 */}
        <Grid item>
          <Stack spacing={3}>
            {/* heading */}
            <Typography fontSize="18px" fontWeight="500">
              US Inspections
            </Typography>

            <Divider />
            {/* first input */}

            <InspectionTypeTable />

            <Typography fontSize="18px" fontWeight="500">
              US Crashes
            </Typography>

            <Divider />

            <USCrashesTable />

            <Typography fontSize="18px" fontWeight="500">
              Canada Inspections
            </Typography>

            <Divider />

            <InspectionTypeTable />
            <Typography fontSize="18px" fontWeight="500">
              Canada Crashes
            </Typography>

            <Divider />

            <USCrashesTable />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default USInspections;
