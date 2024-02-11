

// https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program-and-receive-them
// https://nodejs.org/docs/latest/api/process.html#process_process_argv

// print process.argv
// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
//   });



const input = process.argv[2];
console.log(input);


