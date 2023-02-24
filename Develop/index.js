// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Please write down the installation instructions.',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Please write down the usage information.',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Please write down the contribution guidelines.',
        name: 'contribution',
    },

    {
        type: 'input',
        message: 'Please write down the test instructions.',
        name: 'test',
    },

    {
        type: 'list',
        message: 'Please select the type of license',
        choices: ['MIT', 'ISC', 'IBM Public License Version 1.0'],
        name: 'license',
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then((data) => {
        
        writeToFile('Readme.md', generateMarkdown(data))})
    .then(() => console.log('Your file successfully written.'))
    .catch((err) => console.log(err))
}

// Function call to initialize app
init();
