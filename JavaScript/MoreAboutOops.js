class Employee {
    constructor(emp_name, emp_salary) {
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
    }
    work() {
        console.log(this.emp_name,'Is working at our company');
    }
}

emp1 = new Employee("Nikhil", 29000);
console.log(emp1);
emp1.work();
emp2 = new Employee("Akash", 35000);
console.log(emp2);
emp2.work();
emp3 = new Employee("Ankit", 45000);
console.log(emp3);
emp3.work();

// 1. Instance variable will be declared inside the constructor.
// 2. Instance variable is present inside the object.
// 3. Object will be present inside heap segment of the memory.
// 4. this keyword always holds address of current object.
// 5. The reference variable present inside stack segment.
// 6. The variable which holds address of the object such variable is called reference variable.