// E4 Unlucky Days:
function fridayThe13ths(year) {
  let thirteenths = [];
  for (let month = 0; month < 12; month++) {
    thirteenths.push(new Date(year, month, 13));
  }
  return thirteenths.reduce((total, day) => {
    return day.getDay() === 5 ? (total + 1) : total;
  }, 0);
}
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
