const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = "README.md"

// TODO: Create an array of questions for user input

const promptUser = () => {
        return inquirer.prompt([
                {
                        type: 'input',
                        message: 'Project Title: ',
                        name: 'title',
                },
                {
                        type: 'input',
                        message: 'Description: ',
                        name: 'description',
                },
                {
                        type: 'input',
                        message: 'Installation Instructions: ',
                        name: 'install',
                },
                {
                        type: 'input',
                        message: 'Usage Information: ',
                        name: 'usage',
                },
                {
                        type: 'input',
                        message: 'Contribution Guidelines: ',
                        name: 'contribution',
                },
                {
                        type: 'input',
                        message: 'Test Instructions: ',
                        name: 'test',
                },
                {
                        type: 'list',
                        message:'Please Select a license',
                        choices: [
                                'MIT',
                                'license 2',
                                'Number 3',
                        ],
                        name: 'license',
                },
                {
                        type: 'input',
                        message: 'GitHub Username',
                        name: 'githubUsername',
                },
                {
                        type: 'input',
                        message: 'Contact Email:',
                        name: 'email',
                },
             
        ]);



};

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
        fs.writeFile(fileName, generateMarkdown(response), (error) => { /* handle error */ });
}

// TODO: Create a function to initialize app
function init() {
        promptUser()
                .then((response) => writeToFile("README.md", response))
                .then(() => console.log('Successfully wrote to README.md'))
                .catch((err) => console.error(err));

              

}

// Function call to initialize app
init();