

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)
## description 
${data.description}
## Table of Contents
 * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
<a name="installation"/>
## Installation
${data.installation}
<a name="usage"/>
## Usage
${data.usage}
<a name="license"/>
## License
${data.license}
<a name="Contributing"/>
## Contributing
${data.contributionGuidelines}
<a name="testing"/>
## Testing
${data.testing}
<a name="questions"/>
## Questions
[Email me](mailto:${data.emailAddress})
[Review my other projects on GitHub.](https://www.github.com/${data.username})

`;
}

module.exports = generateMarkdown;
