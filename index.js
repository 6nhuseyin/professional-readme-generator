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
    name: 'Question',
    message: 'Enter your email address:'
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  
}

// function call to initialize program
init();

console.log("Script started successfully");