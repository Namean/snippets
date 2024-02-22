const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);
const date = spawn('date');
const seq = spawn('seq', [1, 10]);

seq.stdout.on('data', data => {
    
    console.log(data.toString().split('\n'));

    //console.log(`stdout: ${data}`);
});

/*
ls.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});


ls.stderr.on('data', data => {
    console.error(`stderr: ${data} `);
});

ls.on('close', code => {
    console.log(`child process exitied with code ${code} `);
});
*/
