import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { setOrderDate } from "../../../../actions/order-actions";
//Date Picker
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {
  Calendar as DatePicker,
  utils,
} from "react-modern-calendar-datepicker";
// Utils
import { getMaximunDateParsed } from "./utils/maxDate";
import { getDisableDays } from "./utils/disableDays";
// Material UI
import Grid from "@material-ui/core/Grid";
// Styles
import "./styles/Calendar.css";

const Calendar = () => {
  // Redux state
  const { date } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  console.log("CALENDAR");
  console.log(date);

  return (
    <Grid item md={12} style={{ padding: 12 }}>
      <DatePicker
        value={date}
        onChange={(date) => dispatch(setOrderDate(date))}
        minimumDate={utils().getToday()}
        maximumDate={getMaximunDateParsed(3)}
        disabledDays={getDisableDays(3)}
        calendarClassName="responsive-calendar"
        colorPrimary="#BA2329"
      />
    </Grid>
  );
};

export default Calendar;
