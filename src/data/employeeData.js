
class Employee{
    constructor(id, firstName, lastName, salary, location){
        this.id =id;
        this.firstName = firstName ;
        this.lastName = lastName;
        this.salary = salary;
        this.location = location;
    }
}
const employeeData = [
    new Employee(123, 'Pankaj', 'Kumar', '25000', 'Mumbai'),
    new Employee(124, 'Satyam', 'Kumar', '25000', 'Mumbai'),
    new Employee(125, 'Prakash', 'Srivastva', '35000', 'Mumbai'),
    new Employee(126, 'Adnan', 'Khan', '250000', 'Chennai'),
    new Employee(127, 'Piyush', 'Kumar', '90000', 'Hyderabad'),
    new Employee(128, 'Sonu', 'Nigam', '15000', 'Mumbai'),
    new Employee(129, 'Arun', 'Verma', '65000', 'Delhi')
];


function sendData(){
    return employeeData;
}


export default sendData;