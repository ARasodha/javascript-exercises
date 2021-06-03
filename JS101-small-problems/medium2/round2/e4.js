/*E4 Unlucky Days:
Input: number (year)
Output: number (amount of Firday 13ths that year)
Rules:
- take a year in as the argument and return how many fridays fall on the 13th
day of the month that year
- May assume that the year is greater than 1752 (Georgian Calender adoption)
- May also assume that the georgian calender will remain in use in the foreseeable
future

Data Structure
- Create `count` variable to keep track of how many 13th's are on a friday that year
and initialize it to 0
- Iterate through the months of the year (start at 1 until 12)
- Within the loop if the date is the 13th and its a friday increment count by 1
  - Use the JavaScript date object
- Outside the loop return count
*/

// My Solution:
function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}

// LS Solution:
// function fridayThe13ths(year) {
//   let thirteenths = [];
//
//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }
//
//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
