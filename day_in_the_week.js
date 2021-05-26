// The get the tasks and their start dates and map to see the dates in that week
const moment = require('moment');


const tasks = [
    { taskName: 'Start date before that week and ends after that week', startDate: '2021-05-22', endDate: '2021-05-22', status: 'On going'},
    { taskName: 'Start date before that week and ends in that week', startDate: '2021-06-22', endDate: '2021-06-22', status: 'On going'},
    { taskName: 'Start date in that week and ends after that week', startDate: '2021-05-20', endDate: '2021-06-22', status: 'Active'},
    { taskName: 'Start date in that week and ends in that week', startDate: '2021-04-22', endDate: '2021-06-21', status: 'Active'},
    { taskName: 'Start date after that week and ends after that week', startDate: '2021-05-21', endDate: '2021-05-21', status: 'Active'},
    { taskName: 'Start date after that week and ends after that week', startDate: '2021-05-28', endDate: '2021-05-28', status: 'Active'},

]
// const thisWeekTasks = []
//
// function checkIfTaskBelongsToWeek(taskStartDate, taskEndDate) {
//     if ((taskStartDate.diff(weekStart) < 0) && (taskEndDate.diff(weekEnd) < 0)) {
//         return false
//     } else return taskStartDate.diff(weekEnd) <= 0;
// }
// weekStart = moment('2021-05-21', 'YYYY-MM-DD');
// weekEnd = moment('2021-05-28', 'YYYY-MM-DD');
//
// tasks.map(task => {
//     if(checkIfTaskBelongsToWeek(moment(task.startDate), moment(task.endDate))){
//         thisWeekTasks.push(task)
//     }
// })
// console.log(thisWeekTasks)



// CASE 1 SCENARIO
let taskStartDate = moment('2021-05-20', 'YYYY-MM-DD');
let taskEndDate = moment('2021-05-22', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True

// Reversing the roles
// If task start date is smaller than the week start date - Check the end date of that task if its smaller than the end date then it's false


function checkIfTaskBelongsToWeek(){
    if(taskEndDate.diff(weekStart) < 0){
        return  console.log('The output',true)
    }else if(taskStartDate.diff(weekEnd) > 0){
        return console.log('The output',false)
    }
    return console.log('The output',true)

}
console.log("Case 1 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("---------------------")


// CASE 2 SCENARIO
taskStartDate = moment('2021-06-22', 'YYYY-MM-DD');
taskEndDate = moment('2021-06-22', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 2 scenario (FALSE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")

// CASE 3 SCENARIO

taskStartDate = moment('2021-05-20', 'YYYY-MM-DD');
taskEndDate = moment('2021-06-22', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 3 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")


// CASE 4 SCENARIO

taskStartDate = moment('2021-04-22', 'YYYY-MM-DD');
taskEndDate = moment('2021-06-21', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 4 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")


// CASE 5 SCENARIO

taskStartDate = moment('2021-05-21', 'YYYY-MM-DD');
taskEndDate = moment('2021-05-21', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 5 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")


// CASE 6 SCENARIO

taskStartDate = moment('2021-05-28', 'YYYY-MM-DD');
taskEndDate = moment('2021-05-28', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 6 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")

// CASE 7 SCENARIO

taskStartDate = moment('2021-05-29', 'YYYY-MM-DD');
taskEndDate = moment('2021-05-30', 'YYYY-MM-DD');

weekStart = moment('2021-05-21', 'YYYY-MM-DD');
weekEnd = moment('2021-05-28', 'YYYY-MM-DD'); // True


console.log("Case 7 scenario (TRUE)")
checkIfTaskBelongsToWeek()
console.log("-------------------")




//
// function checkIfTaskInWeek(weekStartDate, weekEndDate){
//     return weekStartDate.isBetween(taskStartDate, taskEndDate,  undefined, '[]') || weekEndDate.isBetween(taskStartDate, taskEndDate,  undefined, '[]')
// }
//
// console.log('Checking if they belong to the two dates', checkIfTaskInWeek(weekStart, weekEnd))
// console.log('--------------------------------------------------------------------------------------------------')
//
// let bb = moment('2010-10-20').isBetween('2010-10-20', '2010-10-25',  undefined, '[]'); // true
// console.log('Testing inclusivity: ', bb)
//

