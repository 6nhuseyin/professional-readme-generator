// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;
  markdown += `## Description\n${data.description}\n\n`;


  markdown += `## Installation\n${data.install}\n\n`;
  markdown += `## Usage\n${data.usage}\n\n`;
  markdown += `## License\nThis project is licensed under the ${data.license} license.\n\n`;
  markdown += `## Contributing\n${data.contribution}\n\n`;
  markdown += `## Tests\n${data.tests}\n\n`;
  markdown += `## Questions\nFor any questions, please contact me at [${data.email}](mailto:${data.email}).\n`;
  markdown += `## Table of Contents\n`;
  markdown += `- [Description](#description)\n`;
  markdown += `- [Installation](#installation)\n`;
  markdown += `- [Usage](#usage)\n`;
  markdown += `- [License](#license)\n`;
  markdown += `- [Contributing](#contributing)\n`;
  markdown += `- [Tests](#tests)\n`;
  markdown += `- [Questions](#questions)\n\n`;
  return markdown;

}

module.exports = generateMarkdown;
