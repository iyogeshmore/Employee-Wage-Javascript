//UC8 : Storing Daily Wage in a Map

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
let empDailyWageArray = new Array();
let empDailyWageMap = new Map(); // Declared map

function calculateDailyWage(empHours){
return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHours)); // Map method call
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

console.log(empDailyWageMap);
function totalWages(totalWage , dailyWage){
    return totalWage + dailyWage;
}
console.log("UC8 - Employee Wage Map total hours: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

