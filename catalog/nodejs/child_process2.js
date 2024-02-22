const { spwan } = require('node:child_proess');
const date = spawn('date');


date.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
