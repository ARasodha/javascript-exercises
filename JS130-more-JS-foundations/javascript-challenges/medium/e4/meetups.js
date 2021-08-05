// Meetups
/*
Input:
Output:
Rules
- construct objects that represent meetup dates 
- each object takes a month number (1-12) and a year (eg., 2012)
- the object should be able to determine the exact date of the meeting in the specified month and year
- example: 2nd Wednesday of May 2021 --> the object should be able to determine that the meet up for 
that month will occur on the 12th of May, 2021
- the descriptors that may be given are strings: `first`, `second`, `third`, `fourth`, `fifth`, `last`,
and `teenth`
  - case is not important
  - teenth - they day of the week that has a teen number as the date
- the days of the week are given as strings, again case is not important

Algorithm
- create Meetup class
  - constructor takes 2 arguments, year and month
- instance methods: 
  - day() - takes weekday argument, and descriptor, returns instance of the built in date object

*/
"use strict";

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.days = [];
  }

  day(weekDay, descriptor) {
    this.getDays(weekDay);
    let index;
    switch (descriptor.toLowerCase()) {
      case 'first':
        index = 0;
        break;
      case 'second':
        index = 1;
        break;
      case 'third':
        index = 2;
        break;
      case 'fourth':
        index = 3;
        break;
      case 'fifth':
        index = 4;
        break;
      case 'last':
        index = this.days.length - 1;
        break;
      case 'teenth':
        let teenth = this.days.filter(day => day.getDate() >= 13 && day.getDate() <= 19)[0];
        index = this.days.indexOf(teenth);
        break;
    }

    return this.days[index] ? this.days[index] : null;
  }

  getDays(weekDay) {
    let dayNumber = this.getDayNumber(weekDay);
    let day = 1;
    let date = new Date(this.year, this.month, day);
    while (date.getMonth() === this.month) {
      if (date.getDay() === dayNumber) {
        this.days.push(date);
      }
      day++;
      date = new Date(this.year, this.month, day);
    }
  }

  getDayNumber(weekDay) {
    let weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return weekDays.indexOf(weekDay.toLowerCase());
  }
}

let meetup = new Meetup(2016, 10);
console.log(meetup.day('Monday', 'teenth').toString());
module.exports = Meetup;