# Team-Profile-Generator-OOP



 ## Description 

- This project was designed as a homework assignment for KU coding bootcamp in Module 10 Challenge, Object-Oriented Programming Challenge: Team Profile Generator

-  Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

- Because this Challenge will require the use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.

- Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.


- A major aspect of this challenge was the balance between figuring out which solution made sense and the solution that would be most efficient.

Because this application won’t be deployed, i will also need to provide a link to a walkthrough video that demonstrates its functionality. 

- Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer. 



 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
 
 
 
 ## Installation

  - There is no starter code for this assignment.

  - In order to install inquirer, i used npm i inquirer@8.2.4.

  - The application will be invoked by using the following command: 'node index.js'.


## Usage

  - This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

  - Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:node index.js

  - It is recommended that you start with a directory structure that looks like this:

.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           

  -  Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer.

  - Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.
  


## User Story


AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated





 ## Contribute 

 -  Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

- This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

- Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:
node index.js

- Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

- Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

- Refer to the Video Submission Guide Links to an external site.on the Full-Stack Blog for additional guidance on creating a video.
  
## Tests

  none

 

  # This project has been deployed to GitHub, here is the link:

  * 
  
  # Project recording link:

  * https://drive.google.com/file/d/1lHDnNxX2AgvNbnWM3A0bNr4veeG4UCq7/view
  
  
  # Sample of README file link:

  * 


## Summary






## Author
 * ANDREI FLOREA - Initial work - Git Hub Profile
 * Challenge 10 | Object-Oriented Programming Challenge: Team Profile Generator
