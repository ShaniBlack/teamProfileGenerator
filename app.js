const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = [];


function createManager(){
    console.log("Welcome, Manager!");
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is your ID?',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber'
        }]
    )
    .then(answers => {
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        createTeam()
    })
}
function createEngineer(){
    console.log("Please answer the following questions about Engineer team members.")
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        }
    ])
    .then(answers => {
        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        teamMembers.push(engineer);
        createTeam()
    })
}

function createIntern(){
    console.log("Please answer the following questions about the Intern members.")
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'school'
        }
    ])
    .then(answers => {
        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        teamMembers.push(intern);
        createTeam()
    })
}

function createTeam(){
    inquirer.prompt({
        type: 'list',
        message: 'What kind of team member would you like to add?',
        name: 'memberAdd',
        choices: ["Manager", "Engineer", "Intern", "None"]

    })
    .then(answers => {
        switch(answers.memberAdd){
            case "Add a Manager":
                createManager();
            // break us out of the loop
                break;
            case "Add an Engineer":
                createEngineer();
                break;
            case "Add an Intern":
                createIntern();
                break;
            default:
                buildTeam();
                break;
        }
    })
}
function writeFile




// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html")
