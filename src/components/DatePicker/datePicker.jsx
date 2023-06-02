import React, { useState } from "react";
import { StyledInput } from "../Styles/StyledBtns";

function DateInput(props) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <StyledInput
      label="Select Date"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: { cursor: "pointer" },
      }}
      {...props}
    />
  );
}

export default DateInput;
