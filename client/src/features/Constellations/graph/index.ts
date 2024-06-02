// import "./index.css";

// export type Data = {
//   count: number;
//   date: EpochTimeStamp;
// }[];
// interface ChartProps {
//   selector: string;
//   data: {
//     count: number;
//     date: EpochTimeStamp;
//   };
// }
// class Chart {
//   selector: string;
//   data: Data;
//   element: Element | null = null;
//   constructor(selector: ChartProps["selector"], data: Data) {
//     this.selector = selector;
//     this.data = this.parseData(data);
//   }

//   parseData(data: Data): Data {
//     return data.sort((a, b) => a.date - b.date);
//   }

//   initialize() {
//     this.element = document.querySelector(this.selector);
//     if (!this.element) throw new Error("Element not found");
//     this.element.innerHTML = "";
//   }

//   update(data: Data) {
//     this.data = this.parseData(data);
//   }

//   getLastDayOfWeekOfMonth(month: number) {
//     const date = new Date(new Date().getFullYear(), month + 1, 0);
//     return date.getDay();
//   }

//   render() {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();

//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     const weeksInYear: string[][] = [];
//     let week = [];
//     let monthHeaders = "";
//     let lastMonth = null;
//     let holdWeek = 0; // hold back spning because week was already represented in the span of previous month

//     const now = new Date();
//     const year = now.getFullYear();
//     // If the date object is in March (getMonth() returns 2), then the year is not a leap year, and there are 365 days.
//     const isLeapYear = new Date(year, 1, 29).getMonth() === 1;
//     const totalDays = isLeapYear ? 366 : 365;

//     for (let i = 1; i <= totalDays; i++) {
//       const date = new Date(currentYear, 0, i);
//       const dayOfWeek = date.getDay();
//       const month = date.getMonth();

//       week[
//         dayOfWeek
//       ] = `<td class="contribution-block" data-level='${Math.floor(
//         Math.random() * 3
//       )}'><span class="sr-only">${date.toLocaleDateString()}</span></td>`;

//       if (dayOfWeek === 6 || i === 365) {
//         weeksInYear.push(week);
//         week = [];
//       }

//       if (lastMonth !== month) {
//         const weeksInMonth = Math.ceil(
//           (new Date(currentYear, month + 1, 0).getDate() +
//             new Date(currentYear, month, 1).getDay()) /
//             7
//         );
//         monthHeaders += `<th class="week-label" colspan='${
//           weeksInMonth - holdWeek
//         }'>${months[month]}</th>`;
//         lastMonth = month;

//         // approximately helps in aligning the spans for all the months
//         const lastDay = this.getLastDayOfWeekOfMonth(month);
//         if (lastDay !== 6) {
//           holdWeek = 1;
//         } else {
//           holdWeek = 0;
//         }
//       }
//     }

//     console.log(weeksInYear, "weeksInYear");

//     const rows = days
//       .map(
//         (day, i) =>
//           `<tr class="day-rows"><th>${day}</th>${weeksInYear
//             .map((week) => week[i] || "<td></td>")
//             .join("")}</tr>`
//       )
//       .join("");

//     const tableHTML = `
//         <table class="chart-table">
//           <thead><tr><th></th>${monthHeaders}</tr></thead>
//           <tbody>${rows}</tbody>
//         </table>
//       `;

//     return tableHTML;
//   }
// }

// export default Chart;
