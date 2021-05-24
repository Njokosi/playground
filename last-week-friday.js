const moment = require("moment")
// If today is saturday - Start of the week -
// Else then get Saturday then find it's friday
// https://momentjscom.readthedocs.io/en/latest/moment/02-get-set/06-day/

function getStartEndDate(day_of_week){
    let start_of_week_date;
    let end_of_week_date;

    // If today is saturday then its the start of the week
    if(day_of_week === 'Sa'){
        start_of_week_date = moment().format('YYYY-MM-Do').slice(0, -2)
        end_of_week_date = moment().day(12).format('YYYY-MM-Do').slice(0, -2)
    } else{
        start_of_week_date = moment().day(-1).format('YYYY-MM-Do').slice(0, -2)
        end_of_week_date = moment().day(5).format('YYYY-MM-Do').slice(0, -2)
    }
    return [start_of_week_date, end_of_week_date]
}


name_of_the_day = moment().format('dd')
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')





name_of_the_day = 'Su'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')


name_of_the_day = 'Mo'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')

name_of_the_day = 'Tu'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')

name_of_the_day = 'We'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')

name_of_the_day = 'Th'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')

name_of_the_day = 'Fr'
console.log('Today is ', name_of_the_day)
console.log('Start of the week: ', getStartEndDate(name_of_the_day)[0], 'End of the week: ', getStartEndDate(name_of_the_day)[1])
console.log('\n')
