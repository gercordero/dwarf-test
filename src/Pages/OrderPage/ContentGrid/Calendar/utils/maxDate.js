// Date fns
import addMonths from "date-fns/addMonths";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getDate from "date-fns/getDate";
import endOfMonth from "date-fns/endOfMonth";

// This function returns an object that contains the year, month and last day of the month
// parsed to the format that the Calendar library uses.
// @param months -> The amount of months in the future that can be selected in the Calendar.
// Example: Current month January, if months = 3, January + 3 == April
export const getMaximunDateParsed = (months = 0) => {
  // Add months
  const date = addMonths(new Date(), months);
  // Get current year
  const year = getYear(date);
  // Get month
  const month = getMonth(date);
  // Get last day of the month
  const lastDayOfMonth = getDate(endOfMonth(date));

  return {
    year,
    month: month + 1, //+1 beacuse the Calendar library months doesn't start with 0 but with 1
    day: lastDayOfMonth,
  };
};

export const getMaximunDate = (months = 0) => {
  // Add months
  let date = addMonths(new Date(), months);
  // Set the current day to the last day of the month
  date.setDate(getDate(endOfMonth(date)));
  // Return date
  return date;
};
