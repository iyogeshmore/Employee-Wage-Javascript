//UC9 - Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions

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
let empDailyHoursMap = new Map(); // Declare Map for daily hour

function calculateDailyWage(empHours){
return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHours)); //Daily wage Map method call
    empDailyHoursMap.set(totalWorkingDays,empHours); //Daily hours Map method call
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

//UC9 - Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHoursMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9 : Employee wage with Arrow "+"Total hours: "+ totalHours +" Total wages: "+ totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHoursMap.forEach( (value, key, map) => {  //use Arrow Functions
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
}
);

console.log("Full working days: "+ fullWorkingDays);
console.log("Part working days: "+ partWorkingDays);
console.log("Non working days: "+ nonWorkingDays);