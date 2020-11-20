const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project's title?:",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project: ",
      name: "description",
    },
    {
      type: "input",
      message: "Describe the installation process: ",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe the purpose of your project:",
      name: "purpose",
    },
    {
      type: "input",
      message:
        'Who contributed to this project? (Seperate multiple names with "-"):',
      name: "contributors",
    },
    {
      type: "checkbox",
      message: "Which license will be used?:",
      name: "licenses",
      choices: ["BSD", "MIT", "GPL"],
    },
    {
      type: "input",
      message: "What is your E-mail address?:",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github user account?:",
      name: "github",
    },
  ])
  .then((response) => {
    console.log(response);
  });
