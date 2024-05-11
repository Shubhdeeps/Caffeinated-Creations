/**
 *
 * @param year
 * @returns true if its a leap year otherwise false
 */
export function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
