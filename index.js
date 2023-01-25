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
        message: "Enter your GitHub repository link:",
        name: "GitHubLink"
    },
     {
        type: "input",
        message: "Enter your site URL:",
        name: "siteLink"
    },
    {
        type: "input",
        message: "Describe the installation for your program (if none enter N/A):",
        name: "installation"
    },
     {
        type: "input",
        message: "Describe how to use your site:",
        name: "usage"
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
    
    GitHub repository: ${response.GitHubLink}
    Site Link: ${response.siteLink}
    
    ## Installation
    
    ${response.installation}
    
    ## Usage
    
    ${response.usage}

    ## Credits
    
   ${response.credits}
    
    ## License
    
    ![NPM](https://img.shields.io/npm/l/${response.npmlicense})
    `
}
promptQs();
