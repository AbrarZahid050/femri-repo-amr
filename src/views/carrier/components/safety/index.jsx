import {
  Grid,
  Paper,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import React from "react";

function SafetySection() {
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
              Safety
            </Typography>

            <Divider />

            <TableContainer
              component={Paper}
              sx={{
                border: "1px solid #9CA3AF",
                boxShadow:
                  "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                borderRadius: "8px",
              }}
            >
              <Table>
                <TableHead sx={{ background: "#F9FAFB" }}>
                  <TableRow>
                    {["Type", "Fatal", "Injury", "Tow", "Total"].map(
                      (heading) => (
                        <TableCell
                          sx={{ color: "#6B7280" }}
                          key={Math.random()}
                        >
                          {heading}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ p: 0 }}>
                    {["Crashes", "0", "0", "0", "0"].map((cellValue) => (
                      <TableCell key={Math.random()}>{cellValue}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SafetySection;
