// Clock
/*
Input: number
Output: string
Rules
- create a clock that is independent of date (24 hours clock)
- should be able to minus and subtract minutes from the time represented by a given clock object
- two clock objects that represent the same time should be equal to each other
- may not use any built in date or time functionality; just use arithmetic operations

Algorithm
- create clock object
- static methods:
  - at() - takes one or two arguments, both numbers. The first one is the hours, second is the minutes
    - if there is only one argument its hours
    - return an object that toString, add and subtract can be directly invoked on
  - toString() - converts the time to a string fromat --> `hh:mm`
  - add() - takes number of minutes that should be added to the current time
    - should allow subtract to be called directly on it (should return an object)
  - takes number of minutes that should be subtracted from the current time
    - should allow add to be called directly on it (should return an object)
*/

"use strict";

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  
  static MINUTES_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;
  static MINUTES_PER_DAY = Clock.MINUTES_PER_HOUR * Clock.HOURS_PER_DAY;

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  convertToMinutes() {
    return this.hours * Clock.MINUTES_PER_HOUR + this.minutes;
  }

  toString(hours, minutes) {
     hours = String(this.hours).length > 1 ? `${this.hours}` :  `0${this.hours}`;
     minutes = String(this.minutes).length > 1 ? `${this.minutes}` :  `0${this.minutes}`;
    return `${hours}:${minutes}`;
  }

  add(minutes) {
    let currentTimeInMinutes = this.convertToMinutes(this.hours, this.minutes);
    currentTimeInMinutes += minutes;

    while (currentTimeInMinutes > Clock.MINUTES_PER_DAY) {
      currentTimeInMinutes -= Clock.MINUTES_PER_DAY;
    }

    this.convertTimeToHoursMinutes(currentTimeInMinutes);
    return this;
  }

  subtract(minutes) {
    while (minutes > Clock.MINUTES_PER_DAY) {
      minutes -= Clock.MINUTES_PER_DAY;
    }

    let currentTimeInMinutes = this.convertToMinutes(this.hours, this.minutes);
    currentTimeInMinutes -= minutes;

    if (currentTimeInMinutes < 0) {
      currentTimeInMinutes += Clock.MINUTES_PER_DAY;
    }
    

    this.convertTimeToHoursMinutes(currentTimeInMinutes);
    return this;
  }

  convertTimeToHoursMinutes(timeInMinutes) {
    this.hours = Math.floor(timeInMinutes / Clock.MINUTES_PER_HOUR);
    this.minutes = timeInMinutes % Clock.MINUTES_PER_HOUR;
  }

  isEqual(otherClock) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
  }
}

module.exports = Clock;