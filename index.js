// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      message: "What is the use of your application?",
      name: "use",
    },
    {
      type: "input",
      message: "How is your application installed?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your application?",
      name: "howToUse",
    },
  ])
  .then((responses) => {
    fs.writeFile("readme.md", JSON.stringify(responses), (error) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("README file created successfully!");
      }
    });
  });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
