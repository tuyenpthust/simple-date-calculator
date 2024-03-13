import {calculateDate} from "simple-date-calculator";

// day different = [{ dayDiff: 2 }]
console.log(calculateDate("2024-04-15", "2024-04-17"));

// day, month different = [{ dayDiff: 3, monthDiff: 2 }]
console.log(calculateDate("2024-04-15", "2024-07-17"));


// day, month, year different = [{ dayDiff: 8, monthDiff: 2, yearDiff: 1 }]
console.log(calculateDate("2022-04-15", "2023-06-17"));