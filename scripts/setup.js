const shell = require('shelljs');
const {spawn} = require('child_process');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

shell.rm('-rf', '.git');


const git = spawn('git', ['init']);

git
    .stdout
    .on('data', data => {
        console.log(`stdout: ${data}`);
    });

git
    .stderr
    .on('data', data => {
        console.log(`stderr: ${data}`);
    });

git.on('close', code => {
    console.log(`Git child exited with code ${code}`);
});