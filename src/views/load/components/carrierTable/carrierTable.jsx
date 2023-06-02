import {
  Box,
  FormControl,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import CustomInput from "../InputFields/CustomInput";
import {
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";
import { ReactComponent as Bin } from "../../../../assets/New Load Page/bin.svg";
import { nanoid } from "@reduxjs/toolkit";
import AddIcon from "@mui/icons-material/Add";

function CarrierTable() {
  return (
    <Box
      width="100%"
      sx={{
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
        p: 2,
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
        }}
        display="flex"
        gap={2}
        justifyContent="space-between"
        flexDirection="row"
      >
        {/* 1st input */}
        <CustomInput>
          <StyledLabel>Name</StyledLabel>
          <StyledInput fullWidth />
        </CustomInput>
        {/* 2nd input */}
        <CustomInput>
          <StyledLabel>Pick up Date</StyledLabel>
          <StyledInput fullWidth />
        </CustomInput>
        {/* 3rd input */}
        <CustomInput>
          <StyledLabel>Pick up Time</StyledLabel>
          <StyledInput fullWidth />
        </CustomInput>
      </Box>

      <Box>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow:
              "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
            borderRadius: "8px",
          }}
        >
          <Table>
            <TableHead sx={{ background: "#F9FAFB" }}>
              <TableRow>
                {[
                  "NAME",
                  "DESCRIPTION",
                  "AMOUNT",
                  "QUALITY",
                  "FIXED",
                  "",
                  "ADD",
                ].map((heading) => (
                  <TableCell sx={{ color: "#6B7280" }} key={nanoid()}>
                    {heading === "ADD" ? (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton
                          sx={{
                            background: "#6F758B",
                            color: "#FFFFFF",

                            height: "15px",
                            marginRight: "5px",
                            width: "15px",
                            "&:hover": {
                              background: "#6F758B",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <AddIcon sx={{ fontSize: "15px" }} />
                        </IconButton>

                        {heading}
                      </span>
                    ) : (
                      heading
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ p: 0 }}>
                {/* {[
                  "Pacome Anjorin",
                  "2911 Nevada Boulevard",
                  "Charlotte,NC 28273",
                  "+56-955-525-285",
                  "04/04/2023(16:30)",
                  "Procurement #",
                ].map((cellValue) => (
                  <TableCell key={nanoid()}>{cellValue}</TableCell>
                ))} */}
                <TableCell>Mike</TableCell>

                <TableCell>
                  <StyledInput type="number" />
                </TableCell>
                <TableCell>
                  <StyledInput type="number" />
                </TableCell>
                <TableCell>
                  <StyledInput type="number" />
                </TableCell>
                <TableCell>
                  <StyledInput type="number" />
                </TableCell>
                <TableCell>$00.00</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton>
                      <Bin />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CarrierTable;
