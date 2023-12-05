// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = [
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  ];

  if (license === "MIT") {
    return badges[0];
  } else if (license === "GPL - 3.0") {
    return badges[1];
  } else if (license === "Apache - 2.0") {
    return badges[2];
  } else if (license === "ISC") {
    return badges[3];
  } else if (license === "AGPL - 3.0") {
    return badges[4];
  } else if (license === "Unlicense") {
    return badges[5];
  } else if (license === "WTFPL") {
    return badges[6];
  } else if (license === "MPL - 2.0") {
    return badges[7];
  } else if (license === "BSD-3-Clause") {
    return badges[8];
  }
  return ""; // If no valid license is provided, return an empty string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**Massachusetts Institute of Technology License**\n\n[${license}](https://opensource.org/licenses/MIT)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**GNU General Public License v3.0**\n\n[${license}](https://www.gnu.org/licenses/gpl-3.0)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**Apache license 2.0**\n\n[${license}](https://opensource.org/licenses/Apache-2.0)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**Internet Software Consortium License**\n\n[${license}](https://opensource.org/licenses/ISC)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**GNU Affero General Public License v3.0**\n\n[${license}](https://www.gnu.org/licenses/agpl-3.0)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**The Unlicense**[${license}](http://unlicense.org/)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**Do What The Fu*k You Want To Public License**\n\n[${license}](http://www.wtfpl.net/about/)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**Mozilla Public License 2.0**\n\n[${license}](https://opensource.org/licenses/MPL-2.0)`,
    `## License\n\nThe software license selected for this application *is as follows*:\n\n**BSD 3-clause "New" or "Revised"** license\n\n[${license}](https://opensource.org/licenses/BSD-3-Clause)`
  ]

  if (license === "MIT") {
    return links[0];
  } else if (license === "GPL - 3.0") {
    return links[1];
  } else if (license === "Apache - 2.0") {
    return links[2];
  } else if (license === "ISC") {
    return links[3];
  } else if (license === "AGPL - 3.0") {
    return links[4];
  } else if (license === "Unlicense") {
    return links[5];
  } else if (license === "WTFPL") {
    return links[6];
  } else if (license === "MPL - 2.0") {
    return links[7];
  } else if (license === "BSD-3-Clause") {
    return links[8];
  }
  return ""; // If no valid license is provided, return an empty string
}


function renderLicensehref(license) {
if(license === "No License") {
  return "## Table of Contents\n\n1. [Description](#description)  \n2. [How to Install](#installation)  \n3. [How to Use](#usage)  \n4. [Testing](#tests)  \n5. [Contact Me](#questions)";
}

return "## Table of Contents\n\n1. [Description](#description)  \n2. [How to Install](#installation)  \n3. [How to Use](#usage)  \n4. [Licensing](#license)  \n5. [Testing](#tests)  \n6. [Contact Me](#questions)";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license)
  const licenseHref = renderLicensehref(answers.license)
  return `# ${answers.title}

  ${licenseBadge}

  
## Description

${answers.description}

${answers.motivation}
  
${licenseHref}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributions

${answers.credits}


${licenseLink}



## Tests

${answers.test}

## Questions

If you have any additional questions you can contact me by using the following:

 Github Profile: [${answers.questions}](https://www.github.com/${answers.questions})

 Email Address: ${answers.email}


`;
}

module.exports = generateMarkdown; //Gives access to this function in any files necessary
