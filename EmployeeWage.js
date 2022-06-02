//UC10 - Ability to store the Day, Hours Worked and Wage Earned in a single object.

const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
    case IS_ABSENT:
    return 0;

    case IS_FULL_TIME:
    return FULL_TIME_HOURS;

    case IS_PART_TIME:
    return PART_TIME_HOURS;
    }
}
let empHours = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empDailyHoursWageArray = new Array();

function calculateDailyWage(empHours){
return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyHoursWageArray.push({
        dayNum: totalWorkingDays,
        dailyHours: empHours,
        dailyWage: calculateDailyWage(empHours),
        toString() {
            return '\nDay'+ this.dayNum + ' => Working Hours is '+ this.dailyHours + ' And Wage Earned = ' + this.dailyWage
        },
    })
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("UC10: Showing Daily Hours Worked and Wage Earned: "+ empDailyHoursWageArray  + "\nTotal wage earned: "+ empWage);