// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    '': 'None',
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)': 'Apache License 2.0',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)': 'GNU General Public License v3.0',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)': 'MIT License',
    '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)': 'BSD 2-Clause “Simplified” License',
    '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)': 'BSD 3-Clause “New or “Revised” License',
    '': 'Boost Software License 1.0',
    '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)': 'Creative Commons Zero v1.0 Universal',
    '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)': 'Eclipse Public License 2.0',
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)': 'GNU Affero General Public License v3.0',
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)': 'GNU General Public License v2.0',
    '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)': 'GNU Lesser General Public License v3',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)': 'Mozilla Public License 2.0'
  }
  const badge = Object.keys(badges).find(key => badges[key] === license);
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    '': 'None',
    'https://opensource.org/licenses/Apache-2.0/': 'Apache License 2.0',
    'https://opensource.org/licenses/GPL-3.0/': 'GNU General Public License v3.0',
    'https://opensource.org/licenses/MIT/': 'MIT License',
    'https://opensource.org/licenses/BSD-2-Clause': 'BSD 2-Clause “Simplified” License',
    'https://opensource.org/licenses/BSD-3-Clause': 'BSD 3-Clause “New or “Revised” License',
    'https://choosealicense.com/licenses/bsl-1.0/': 'Boost Software License 1.0',
    'https://opensource.org/licenses/CDDL-1.0': 'Creative Commons Zero v1.0 Universal',
    'https://opensource.org/licenses/EPL-2.0': 'Eclipse Public License 2.0',
    'https://choosealicense.com/licenses/agpl-3.0/': 'GNU Affero General Public License v3.0',
    'https://opensource.org/licenses/GPL-2.0': 'GNU General Public License v2.0',
    'https://opensource.org/licenses/LGPL-2.1/': 'GNU Lesser General Public License v2.1',
    'https://opensource.org/licenses/MPL-2.0/': 'Mozilla Public License 2.0'
  }
  const link = Object.keys(links).find(key => links[key] === license);
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license)
  return (
    `## License\nLicensed under <a href="${link}">${license}<a>.`)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, credits, contribution, test, license, email } = data

  const badge = renderLicenseBadge(license)
  const licenseSection = renderLicenseSection(license)
  const link = renderLicenseLink(license)


  return (
    `${badge}\n
# ${title}\n
## Description
${description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)\n
## Installation
${installation}\n
## Usage
${usage}\n
## Credits
${credits}\n
## Contribution
${contribution}\n
## Tests
${test}\n
${licenseSection}
See ${link} for more information.\n
## Questions?\n
github handle: RayR124 - visit my profile: https://github.com/RayR124<br>
Contact me at ${email} if you have any additional questions!`
  );
}

module.exports = generateMarkdown;
