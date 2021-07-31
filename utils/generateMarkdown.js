// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
        return `
# ${response.title} 

![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

# Table of Contents
1. [Description](#description)
2. [Installation](#Installation-Instructions)
3. [Usage Instructions](#usage-instructions)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Testing Instructions](#testing-instructions)
6. [Questions](#questions)


## Description
${response.motivation}

${response.why}

${response.problems}

${response.learn}


## Installation Instructions
${response.install1}

${response.install2}

${response.install3}

${response.install4}

${response.install5}


## Usage Instructions
${response.usage}


## Contribution Guidelines
${response.contribution}


## Testing Instructions
${response.test}


## Credits
${response.credits}

## Questions
[Link to GitHub Profile](https://www.github.com/${response.githubUsername})

For additional questions please email ${response.email}

`;
}

module.exports = generateMarkdown;


