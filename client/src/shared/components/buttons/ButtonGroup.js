import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export function ButtonGroup({ onChange, buttons = ["1", "2", "3"] }) {
  const [activeButton, setActiveButton] = useState(buttons[0]);

  const handleOnChange = (event, newActiveButton) => {
    onChange(event);
    if (newActiveButton !== null) {
      setActiveButton(newActiveButton);
    }
  };

  return (
    <ToggleButtonGroup
      variant="contained"
      color="secondary"
      value={activeButton}
      exclusive
      onChange={handleOnChange}
    >
      {buttons.map((label, index) => (
        <ToggleButton value={label} key={index} variant="contained">
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

