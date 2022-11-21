class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
  getIntro() {
    return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`;
  }
}
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
let intro = employee1.getIntro();
console.log(intro);
