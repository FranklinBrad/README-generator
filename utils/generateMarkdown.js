// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (license === "Boost"){
    return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
  } else if (license === "Apache" ) {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/IPL-1.0"
  } else if (license === "Boost"){
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license === "Apache" ) {
    return "https://opensource.org/licenses/Apache-2.0"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `(${renderLicenseBadge(license)})..${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Table of contents

 - [License](#License)
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Questions](#Questions)

 
  ## License

  ${renderLicenseSection(data.license)}

  ## Description
  
  ${data.description}
 
  ## Installation
 
  ${data.installation}
  
  ## Usage
 
  ${data.use}

  ## Questions

  ${data.name}
  
  Github profile: ${data.github}

  Contact me here: ${data.email}


`;
}

module.exports = generateMarkdown;
