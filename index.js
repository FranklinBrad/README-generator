// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of your application",
    name: "description",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "use",
  },
  {
    type: "input",
    message: "How is your application installed?",
    name: "installation",
  },
  {
    type: "list",
        message: "what license are you using?",
        choices: ["MIT", "Boost", "Apache"],
        name:"license"
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the name of your github profile",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email",
  },

]


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile("./output/readme.md", generateMarkdown(response) , (error)=>error?console.error(error):console.log("successful") );
  });
}

// Function call to initialize app
init();
