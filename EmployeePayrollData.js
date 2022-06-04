class EmployeePayrollData{
    id;
    salary;

    constructor(id, name, salary){   // constructor
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name(){                     // Getter Setter Method
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    toString(){                     // Method
        return "ID: "+ this.id + ", Name: "+ this.name + ", Salary: "+ this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John"
console.log(employeePayrollData.toString());