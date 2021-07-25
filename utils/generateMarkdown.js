// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
        return `
#${response.title}

#Table of Contents
1. [Description](#description)
2. [Installation](#Installation-Instructions)
3. [Usage Instructions](#usage-instructions)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Testing Instructions](#testing-instructions)
6. [Questions](#questions)


##Description
${response.description}

##Installation Instructions
${response.install}

##Usage Instructions
*${response.usage}

##Contribution Guidelines
${response.contribution}

##Testing Instructions
${response.test}

##License Information
${response.license}

##Questions
[Link to GitHub Profile](https://www.github.com/${response.githubUsername})

For additional questions please email ${response.email}

`;
}

module.exports = generateMarkdown;


