const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        // Title of ReadMe
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your README? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the title')
                    return false
                }
            }
        },
        // Description of Project
        {
            type: 'input',
            name: 'description',
            message: 'Description of your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        // INSTALL
        {
            type: 'text',
            name: 'install',
            message: 'Type in some installation intructions: (Max-5)'
        },
        // USAGE
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions: '
        },
        // Questions for Github info
        {
            type: 'text',
            name: 'github',
            message: 'What is your github username?'
        },
        // Questions for Email
        {
            type: 'input',
            name: 'email',
            message: 'What is your current email?'
        },

        // License info
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license for this project?',
            choices: ['MIT', 'Apache', 'GPL']
        }
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your file had been generated')

    })
}
// function call to initialize program
function init() {
    questions()
        .then(questionsData => {
            return generateMarkdown('questionsData');
        })
        .then(writeMarkDown => {
            return writeFile(writeMarkdown);
        })
};

init();
