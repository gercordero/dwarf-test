import React from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { setOrderPeopleAmount } from "../../../../../actions/order-actions";
// Material UI
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";

const SelectPeople = ({ maxPeople }) => {
  const { peopleAmount } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  return (
    <>
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        Select amount of people
      </Typography>
      {/* Select */}
      <Select
        native
        value={peopleAmount}
        color="secondary"
        variant="outlined"
        style={{ width: "20%" }}
        onChange={(event) => dispatch(setOrderPeopleAmount(event.target.value))}
      >
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
