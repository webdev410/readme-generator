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
                        message: 'Installation Instruction #1: ',
                        name: 'install1',
                },
                {
                        type: 'input',
                        message: '#2 (if no further instructions are needed, leave blank and press ENTER): ',
                        name: 'install2',
                },
                {
                        type: 'input',
                        message: '#3 (if no further instructions are needed, leave blank and press ENTER): ',
                        name: 'install3',
                },
                {
                        type: 'input',
                        message: '#4 (if no further instructions are needed, leave blank and press ENTER): ',
                        name: 'install4',
                },
                {
                        type: 'input',
                        message: '#5 (if no further instructions are needed, leave blank and press ENTER): ',
                        name: 'install5',
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
                        message: 'Please Select a license',
                        choices: [
                                'MIT',
                                'Apache 2.0',
                                'GNU',
                                'Creative Commons',
                                'GNU',
                                'GNU',
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