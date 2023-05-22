import { Box, Divider, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { StyledInput, SubmitBtn } from "../Styles/StyledBtns";
import { indigo } from "@mui/material/colors";

function CarrierSearchForm() {
  const [code, setCode] = useState("MC");
  const [number, setNumber] = useState();
  const [result, setResult] = useState([]);
  const carriers = [
    { code: "MC", Number: 123456, name: "carrier 1" },
    { code: "DOT", Number: 654321, name: "carrier 2" },
    { code: "FF", Number: 98741, name: "carrier 3" },
  ];
  const handleSearch = () => {
    setResult([
      carriers.find((item) => item.Number == number && item.code === code),
    ]);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          minWidth: "500px",
          padding: "20px",
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={code}
          sx={{
            width: "100px",
            height: "43px",
          }}
          onChange={(event) => setCode(event.target.value)}
        >
          <MenuItem value={"MC"}>MC</MenuItem>
          <MenuItem value={"DOT"}>DOT</MenuItem>
          <MenuItem value={"FF"}>FF</MenuItem>
          <MenuItem value={"MX"}>MX</MenuItem>
        </Select>
        <StyledInput
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          sx={{
            height: "100%",
            background: "white",
          }}
        />

        <SubmitBtn onClick={handleSearch}> search</SubmitBtn>
      </Box>

      {result.length > 0 && (
        <>
          <Divider />
          {result.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: "500px",
                padding: "20px",
              }}
            >
              <p>carrier</p>
              <SubmitBtn
                onClick={() => console.log("hello")}
                sx={{
                  background: indigo[500],
                  "&:hover": {
                    background: indigo[700],
                  },
                }}
              >
                review carrier
              </SubmitBtn>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}

export default CarrierSearchForm;
