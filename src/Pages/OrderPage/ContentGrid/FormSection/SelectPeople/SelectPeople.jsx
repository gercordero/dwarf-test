import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";

const SelectPeople = ({ maxPeople }) => {
  return (
    <>
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        Select amount of people
      </Typography>
      {/* Select */}
      <Select native value={1} style={{ width: "20%" }}>
        {/* Create an array that has [maxPeople] elements and map through it */}
        {[...new Array(maxPeople).keys()].map((item) => (
          <option value={item + 1} key={item}>
            {item + 1}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SelectPeople;
