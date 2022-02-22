const inquirer = require('inquirer');
// // required statement to be able to use file system module "fs.". requires is a built in functio available in node.js
// const fs = require('fs');
// // alos allows us to inport the module we made in page-template.js file
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
//     console.log('Portolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is yoyr name?'
        }
    ])
    .then(answers => console.log(answers));