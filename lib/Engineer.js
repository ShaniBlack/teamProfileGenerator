// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github){
        // super refers to the class that was extended
        super(name, id, email);
        // addition to what is required for super
        this.github = github
    }
    getGithub(){
        return this.github
    };
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer