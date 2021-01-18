// Utils
import { getMaximunDate } from "./maxDate";
// Date fns
import eachWeekendOfInterval from "date-fns/eachWeekOfInterval";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getDate from "date-fns/getDate";
import subDays from "date-fns/subDays";

// This function returns every Saturday and Sunday within an interval which runs from
// the current day to the last day of the current month + the number of past months
// by parameter.
export const getDisableDays = (months = 0) => {
  // This function should return all the saturdays and Sundays of the given interval,
  // but isn't working correctly and is only giving the Sundays.
  const sundaysOfInterval = eachWeekendOfInterval({
    start: new Date(),
    end: getMaximunDate(months),
  });

  // To fix the issue from above we create an array of Saturdays.
  const addSaturdays = sundaysOfInterval.map((day) => subDays(day, 1));

  // Then we merge the arrays from above so we have a unified weekends array.
  const weekends = sundaysOfInterval.concat(addSaturdays);

  // Finaly we parsed the data to the format that the Calendar Library uses.
  const disableDays = weekends.map((day) => {
    return { year: getYear(day), month: getMonth(day) + 1, day: getDate(day) };
  });

  // Return disable days
  return disableDays;
};
