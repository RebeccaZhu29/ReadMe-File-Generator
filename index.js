// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Could you please describe your project briefly?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'what is the license for your application?',
    choices: ['Apache 2.0', 'GNU AGPLv3', 'MIT License', 'Boost Software License 1.0'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Could you please provide the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the username for your Github account?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README file has been generated successfully!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      const fileContent = generateMarkdown(responses);
      writeToFile('README.md', fileContent);
    })
}

// Function call to initialize app
init();
