// required statement to be able to use file system module "fs.". requires is a built in functio available in node.js
const fs = require('fs');
// alos allows us to inport the module we made in page-template.js file
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// this is the same as the two variables above these brackets specify which item in the array the value will be based on position of the variabe
const [name, github] = profileDataArgs;

// file sistem module from node taking three perams
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portolio complete! Check out index.html to see the output!');
});

