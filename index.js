const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: 'What is the title of your project?',
        name: "title",
    },
    {
        type: "input",
        message: 'Provide a description of your project:',
        name: "description",
    },
    {
        type: "input",
        message: "What is table of content?",
        name: "content",
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "install",
    },
    {
        type: "input",
        message: "How is your project used? Provide examples or use cases:",
        name: "usage",
    },

    {
        type: "input",
        message: "What license do you need?",
        name: "license",
    },
    {
        type: "input",
        message: "Who contribuited to this project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Tests",
        name: "tests",
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file: ', err);
        } else {
            console.log('Successfully created README file: ' + fileName);
        }
    });
}

// function to initialize program
function init() {
    console.log("startinit");
    inquirer.prompt(
        questions
    ).then((answers) => {
        
        const markdownContent = generateMarkdown(answers);
        writeToFile('testREADME.md', markdownContent);
    }).catch((error) => {
        console.error("An error occurred:", error);
    });
}
// function call to initialize program
init();

