import React from "react";
import uuid from "react-uuid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function DropDown({ state, setState, label, itemOptions, width }) {
  const handleChange = (event) => {
    console.log(label, ": ", event.target.value);
    setState(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
          {label}
        </InputLabel>
        <Select
          style={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={label}
          onChange={handleChange}
        >
          {itemOptions.map((data, index) => {
            return (
              <MenuItem
                key={uuid()}
                value={index}
                style={{ backgroundColor: "white" }}
              >
                {itemOptions[index]}
                {/* {itemOptions.map((option, index) =>
                  index === itemOptions.length - 1
                    ? data[option]
                    : data[option] + ": "
                )}{" "} */}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;
