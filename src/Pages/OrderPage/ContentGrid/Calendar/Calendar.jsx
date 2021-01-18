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

const Calendar = () => {
  // Redux state
  const { date } = useSelector((state) => state.orderDate);
  const dispatch = useDispatch();

  return (
    <div>
      <DatePicker
        value={date}
        onChange={(date) => dispatch(setOrderDate(date))}
        minimumDate={utils().getToday()}
        maximumDate={getMaximunDateParsed(3)}
        disabledDays={getDisableDays(3)}
        colorPrimary="#BA2329"
      />
    </div>
  );
};

export default Calendar;
