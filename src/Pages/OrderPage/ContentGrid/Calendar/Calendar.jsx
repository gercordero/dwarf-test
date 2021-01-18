import React, { useState } from "react";
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
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div>
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={utils().getToday()}
        maximumDate={getMaximunDateParsed(3)}
        disabledDays={getDisableDays(3)}
        colorPrimary="#BA2329"
      />
    </div>
  );
};

export default Calendar;
