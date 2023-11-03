class Department{
  // private id: string;
  // name: string;
  private employees: string[] = [];

  constructor(private id:string, public name:string){
    // this.id = id;
    // this.name = n;
  }
  describe(this: Department){
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee:string){
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name:'Dummy', describe: accounting.describe};
// accountingCopy.describe();