
// const printProfileData = profileDataArr => {
//     // this 
//     for (let i = 0; i < profileDataArgs.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // is the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };
// printProfileData(profileDataArgs);

// when no curly braces a return is implied so no return statement is needed  
// const generatePage = (userName, githubName) => {`name: ${userName}, Github: ${githubName}`;

// this version does the same as above but makes a line break becaue you seperated each part in its own line
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
  
    `;
};
// allows to export function to a different file
module.exports = generatePage;