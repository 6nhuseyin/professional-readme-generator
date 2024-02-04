// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;

// Adding license badge

  markdown += `## Description\n${data.description}\n\n`;
  markdown += `## Table of Contents\n`;
  markdown += `- [Description](#description)\n`;
  markdown += `- [Installation](#installation)\n`;
  markdown += `- [Usage](#usage)\n`;
  markdown += `- [Contributing](#contributing)\n`;
  markdown += `- [Tests](#tests)\n`;
  markdown += `- [Questions](#questions)\n\n`;

  markdown += `## Installation\n${data.install}\n\n`;
  markdown += `## Usage\n${data.usage}\n\n`;
  
  if (data.license !== 'None') {
    markdown += `## License\nThis project is licensed under the ${data.license} license.\n\n`;
    markdown += `![License](https://img.shields.io/badge/license-${data.license.replace(" ", "_")}-blue.svg)\n\n`;
  } else {
    markdown += `## License\nThis project is not licensed.\n\n`;
  }
  markdown += `## Contributing\n${data.contribution}\n\n`;
  markdown += `## Tests\n${data.tests}\n\n`;
  markdown += `## Questions\nFor any questions, please contact me at [${data.email}](mailto:${data.email}).\n`;

  return markdown;

}

module.exports = generateMarkdown;
