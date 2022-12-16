// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
        name: 'title',
        mesage: " What is the Title of your project: "
    },{type: 'input',
        name: 'description',
        message: "Write a detailed Description of your project: "
    },{type: 'input',
        name: 'installation',
        message: "List the steps required to install and run the project: "
    },{type: 'input',
        name: 'usage',
        message: "Provide instructions and examples of your project in use for the Usage section: "
    },{type: 'input',
        name: 'credits',
        message: "If applicable, List any collaborators: "
    },{type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause “Simplified” License','BSD 3-Clause “New or “Revised” License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0']
    },{type: 'input',
        name: 'GitHub',
        message: "Enter your github username: "
    },{type: 'input',
        name: 'email',
        message: "Enter your email-adress: "
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        return console.log(err);
     } console.log('Success! Your README.md file has been creatified!');
});
}

// TODO: Create a function to initialize app
function init() {
    
inquirer.prompt(questions)
.then((answers) => {
    const fileName = `README.md`
    const data = generateMarkdown(answers)
    writeToFile(fileName, data);
})
}

// Function call to initialize app
init();
