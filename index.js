const fs = require('fs')
const inquirer = require('inquirer')


const promptQs = () =>
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?:",
        name: "projectname"
    },
    {
        type: "input",
        message: "Write a description for your README file:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "GitHubUser"
    },
     {
        type: "input",
        message: "Enter your GitHub profile link:",
        name: "GitHubLink"
    },
     {
        type: "input",
        message: "Enter your email:",
        name: "email"
    },
    {
        type: "input",
        message: "Describe the installation for your project (if none enter N/A):",
        name: "installation"
    },
     {
        type: "input",
        message: "Describe how to use your project:",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project:",
        name: "contribute"
    },
     {
        type: "input",
        message: "enter the credits for your repository. (if none type N/A):",
        name: "credits"
    },
    {
        type: "input",
        message: "name of NPM package used?:",
        choices: ["N/A", "MIT", "GPL 3.0", "BSD 3"],
        name: "npmlicense"
    },
])
.then((response) => {

    fs.writeFile("./Output/README.md", writeREADME(response), (err) =>
    err ? console.error(err) : console.log("success!")
    );
});

const writeREADME = (response) => {
    return `# ${response.projectname}

## Description
    
${response.description}

## License
    
![NPM](https://img.shields.io/npm/l/${response.npmlicense})
    
## Table of Contents
   
- [Installation] (#installation)
- [Usage] (#usage)
- [Contribution] (#contribution)
- [Credits] (#credits)
- [Questions] (#questions)

    
## Installation
    
 ${response.installation}
    
 ## Usage
    
${response.usage}

## Contribution Guidelines

${response.contribute}

 ## Credits
    
${response.credits}

## Questions
${response.GitHubUser} : ${response.GitHubLink}

You may email me at ${response.email} with any additional questions you may have.
   
    

    `
}
promptQs();
