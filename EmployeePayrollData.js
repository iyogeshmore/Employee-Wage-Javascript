// UC 12 - Extend Employee Payroll Class

class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
 
    constructor(...params){       // constructor
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id(){         // Getter Setter Method

        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!'
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get gender(){
        return this.gender;
    }

    set gender(gender){
        this._gender = gender;
    }

    get startDate(){
        return this.startDate;
    }

    set startDate(startDate){
        this._startDate = startDate;
    }

    toString(){     // Method
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "ID: "+ this.id + ", Name: "+ this.name + ", Salary: "+ this.salary+
                ", Gender: "+ this.gender + ", Start Date: "+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
console.log("---------------------------------------------------------------------------")
try {
    employeePayrollData.name = "Yogesh";
    console.log(employeePayrollData.toString());
} catch (error ) {
    console.error(error);
}
console.log("---------------------------------------------------------------------------")
let newEmployeePayrollData = new EmployeePayrollData(1, "Terissa", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());