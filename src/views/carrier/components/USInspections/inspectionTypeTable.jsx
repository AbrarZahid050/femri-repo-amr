import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function InspectionTypeTable() {
  return (
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
            {["Inspection Type", "Vehicle", "Driver", "Hazmat", "IEP"].map(
              (heading) => (
                <TableCell sx={{ color: "#6B7280" }} key={Math.random()}>
                  {heading}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ p: 0 }}>
            {[
              "Inspections",
              "Pacome Anjorin",
              "2911 Nevada Boulevard",
              "Charlotte,NC 28273",
              "+56-955-525-285",
            ].map((cellValue) => (
              <TableCell key={Math.random()}>{cellValue}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {[
              "Out of Service",
              "Pacome Anjorin",
              "2911 Nevada Boulevard",
              "Charlotte,NC 28273",
              "+56-955-525-285",
            ].map((cellValue) => (
              <TableCell key={Math.random()}>{cellValue}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InspectionTypeTable;
