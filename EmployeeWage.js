//UC7 : Array Helper Functions

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

function calculateDailyWage(empHours){
return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

//UC7A - Calc total wage using Array forEach traversal or reduce method

let totEmpWage=0;
function sum(dailyWage){
    totEmpWage+= dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A - Total days: "+totalWorkingDays+" Total Hrs: "+totalWorkingHours+" EMP Wage: "+totEmpWage);
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp wage with reduce: " +empDailyWageArray.reduce(totalWages,0));

// UC7B - Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWagearray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map ");
console.log(mapDayWithWagearray)

// UC7C - Show Days when Full time wage of 160 were earned using filter function

function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWagearray.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned ")
console.log(fullDayWageArray)

//UC7D - Find the first occurrence when Full Time Wage was earned using find function

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime Wage was earned on day: "+mapDayWithWagearray.find(findFulltimeWage));

//UC7E - Check if Every Element of Full Time Wage is truly holding Full time wage

function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC6E: Check All Elements have Full Time Wage: "+fullDayWageArray.every(isAllFulltimeWage));

//UC7F - Check if there is any Part Time Wage

function isAnyParttimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F: Check If Any Part Time Wage: "+ mapDayWithWagearray.some(isAnyParttimeWage));

//UC7G -  Find the number of days the Employee Worked

function totalDaysWorked(numOfDays , dailyWage){
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G: Number of days Employee worked: "+ empDailyWageArray.reduce(totalDaysWorked,0));