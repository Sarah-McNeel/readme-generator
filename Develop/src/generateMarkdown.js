// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  - [License](#license)
  - [Description](#description)
  - [Images](#images)
  - [Installation Instructions](#installation-Instructions)
  - [Test](#test)
  - [GitHub](#gitHub)
  - [Email](#email-address)
  - [Contributors](#contributors)
  ## License:
  [![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  ## Description:
  ${data.description}
  ## Images:
  ![Project ScreenShot](./imagePathHere.png)
  ![Project Screenshot](./imagePathHere.png)
  ![Project Screenshot](./imagePathHere.png)
  ## Installation Instructions: 
  ${data.installationInstructions}
  ## Test: 
  To test type ${data.test} into the terminal
  ## Github: 
  Check out more project on my Github at https://github.com/${data.gitHub}
  ## Email Address:
  If you have any question please feel free to email me at ${data.email}
  ## Contributors:
  ${data.contributors}
  `;
};

module.exports = 'generateMarkdown';
