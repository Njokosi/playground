const moment = require("moment")


function getThisWeekDates() {
    let weekDates= [];

    for (let i = -1; i <= 5; i++) {
        weekDates.push(moment().day(i));
    }

    return weekDates;
}

let thisWeekDates = getThisWeekDates();

console.log(moment().day(-1).format('dddd, lll'))
thisWeekDates.forEach(function(date){ console.log(date.format('dd, Do'));});


let today = moment().format('Do')
console.log('Today:', today.slice(0, -2))