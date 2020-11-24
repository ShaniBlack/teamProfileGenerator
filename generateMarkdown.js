function generateMarkdown(responses) {
    return `# ${responses.title}
  
    ## Description
    ${responses.description}
  
    Here are some of the technologies that were used to the create this program:
    ${responses.technologies}
  
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)
    
    ## Installation
    ${responses.installation}
  
  
    ## Usage
    ${responses.usage}
  
    ## Contributing
    ${responses.contributing}
  
    ## Tests
    ${responses.tests}
  
    ## Questions
    Please feel free to find me on GitHub: [${responses.username}](https://github.com/${responses.username}).
    You can also [email](shaniblack2004@gmail.com) me with any questions.
  
    ## License
    This application is covered by the ${responses.license} license.
  `;
  }
  
  module.exports = generateMarkdown;