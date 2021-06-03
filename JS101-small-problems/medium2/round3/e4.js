// Ex4 Unlucky Days:
/*
Input: number
Output: number
Rules:
- take the year argument and return the number of Friday the 13ths are in that
year
- may assume that the year is greater than 1752 (Gregorian Calender)
- may assume that the same calender will be used in the future

Algorithm
- create thirteenths empty arra
- iterate from 1 to 12 for the months
- within the month use the date class to get the fridays that fall on the 13th
push them into thirteenths
- filter over thirteenths, if the day if friday returen it
- return the length of the filtered array
*/

function fridayThe13ths(year) {
  let thirteenths = [];
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    thirteenths.push(date);
  }
  return thirteenths.filter(date => date.getDay() === 5).length;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
