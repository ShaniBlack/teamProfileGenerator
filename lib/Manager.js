// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // super refers to the class that was extended
        super(name, id, email);
        // addition to what is required for super
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return "Manager"
    }
}
module.exports = Manager