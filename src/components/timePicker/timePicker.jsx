import React, { useState } from "react";
import { StyledInput } from "../Styles/StyledBtns";

function TimeInput(props) {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <StyledInput
      label="Select Time"
      type="time"
      value={selectedTime}
      onChange={handleTimeChange}
      inputProps={{
        step: 300, // Optional: step size for minutes, defaults to 60 (1 hour)
      }}
      {...props}
    />
  );
}

export default TimeInput;
