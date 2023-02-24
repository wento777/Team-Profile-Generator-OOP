//include packages needed for this application

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const html = require('./src/html');


//node modules
const inquirer = require("inquirer");
const fs = require("fs");


//team array
const teamArray = [];


const addManager = () => {
    return inquirer.prompt ([
    {

        type: 'input',
        name: 'name',
        message: 'Managers name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Manager name!");
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'ID',
        message: 'Manager ID',
        // validate: nameInput => {
        //     if  (isNaN(nameInput)) {
        //         console.log ("Manager ID!")
        //         return false; 
        //     } else {
        //         return true;
            // }
        // }


    },
    {
        type: 'input',
        name: 'email',
        message: 'email adress',


    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'office number',
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ('Office number!')
                return false; 
            } else {
                return true;
            }
        }

    }
])
.then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};


const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
           
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
      

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        if (err) {
            console.log(err);
            return;
        
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return html(teamArray);
  })
  .then(html => {
    return writeFile(html);
  })
  .catch(err => {
 console.log(err);
  });
  