/**
 *
 * @param year
 * @returns true if its a leap year otherwise false
 */
export function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function dateFromDay(year: number, day: number) {
  const date = new Date(year, 0); // initialize a date in `year-01-01`
  return new Date(date.setDate(day)); // add the number of days
}
