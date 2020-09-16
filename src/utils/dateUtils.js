import {getEaster} from "./easter"

export const calculateFall = (year) => {
  let exaltationOfTheCross = new Date(year, 8, 14);
  return findNextWednesdayAfterDate(exaltationOfTheCross);
}

export const calculateWinter = (year) => {
  let stLucy = new Date(year, 11, 13);
  return findNextWednesdayAfterDate(stLucy);
}

export const calculateSpring = (year) => {
  let easter = getEaster(year)
  return subtractDays(easter, 46 - 7); // week after Ash Wednesday
}

export const calculateSummer = (year) => {
  let easter = getEaster(year)
  return addDays(easter, 49 + 3); // Wednesday after Pentecost
}

export const calculateAllDates = (startDate) => {
  let dates = [startDate] // Wednesday
  dates.push(addDays( startDate, 2)) // Friday
  dates.push(addDays( startDate, 3)) // Saturday
  return dates
}

const findNextWednesdayAfterDate = (date) => {
  while (date.getDay() != 3) {
    date = addDays(date, 1)
  }
  return date;
}

const addDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const subtractDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}
