// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;

const license = [
    'MIT',
    'GPL v3',
    'Apache 2.0',
    'ISC',
    'GNU AGPL v3',
    'The Unlicense',
    'WTFPL',
    'Mozilla Public License 2.0',
    'BSD 3-Clause'

]

const fileName  = 'README.md';

const generateMarkdown = require('./generateMarkdown'); //imports an finds the function named generateMarkdown from another file
const renderLicenseBadge = require('./generateMarkdown');

const enter = "Type 'Enter' to skip or save.";
const arrowKeys = "Use Arrow Keys to Navigate Licenses."
const enterarrowKeys = `\x1b[33m${arrowKeys}\x1b[0m`;
const enterYellow = `\x1b[33m${enter}\x1b[0m`;
const success = 'README.md created successfully!';
const successGreen = `\x1b[32m${success}\x1b[0m`;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
  
    {
        type:'input',
        name: 'questions',
        message: `What is your github username? ${enterYellow}\n`
      },
      {
        type:'input',
        name: 'email',
        message: `\nWhat is your E-mail address? ${enterYellow}\n`
      },
    {  type: 'input',
    name: 'title',
    message: `\nWhat is a good title for your project? ${enterYellow}\n`
  } ,
  {
    type:'input',
    name: 'description',
    message: `\nGive a thorough description of the project. What? Why? and How? ${enterYellow}\n`
  },
  {
    type:'input',
    name: 'motivation',
    message: `\nWhat was your motivation for this project? ${enterYellow}\n`
  },
  {
    type:'input',
    name: 'installation',
    message: `\nHow might someone install this project? Use step by step detailed instructions. ${enterYellow}\n`
  },
  {
  type:'input',
  name: 'usage',
  message: `\nHow does one use or run the project? ${enterYellow}\n`
},
{
    type:'input',
    name: 'credits',
    message: `\nDid anyone else contribute to this project? If yes link their github profiles here. ${enterYellow}\n`
  },
{
  type:'list',
  name: 'license',
  message: `\nWhat license did you use for this project? ${enterarrowKeys}\n`,
  choices: license,


},
{
    type:'input',
    name: 'test',
    message: `\nHow do you run the tests created for this project? ${enterYellow}\n`
},
]);
};


// inquirer.prompt(questions)
//   .then((answers) => {
   
//     const markdownContent = generateMarkdown(answers);

 



// // TODO: Create a function to write README file
// fs.writeFile(fileName, markdownContent, (err) =>
//     err ? console.log(err) : console.log(`${successGreen}`)
// );
// });

// TODO: Create a function to initialize app
    const init = () => {
        promptUser()
          .then((answers) => writeFile(fileName, generateMarkdown(answers)))
          .then(() => console.log('Successfully wrote to readME.md'))
          .catch((err) => console.error(err));
      };
      


// Function call to initialize app
init();

