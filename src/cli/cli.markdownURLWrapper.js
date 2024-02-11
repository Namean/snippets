//


// You can pass these as one big string in the shell
// however that kinda sucks, and it fills my history
// So a web tool would be better ux imo.
// The web tool for this should have a copy button for each query too.

// web application user interface design
// web application user interface design examples
// web application user interface design guidelines
// web application ui examples


// FEATURE REQUEST
// I need this to put numbers at the front instead of the markdown links
// thx k bye.

// 1. https://designmodo.com/web-application-interface/
// 2. https://www.smashingmagazine.com/2009/01/10-useful-web-application-interface-techniques/
// 3. https://gearheart.io/articles/role-web-application-user-interface-design/

const input = process.argv[2];
// console.log(input);

// let strings = [];
// let bigString = strings.reduce((acc, cv) => cv + acc);

const queryString = input;
let splitString = queryString.split('\n').filter(x => x !== '');
const length = queryString.length;




console.log('\n')
splitString
  .map((queryString) => console.log(`## [QUERY: ${queryString}](  )`));
console.log('\n');