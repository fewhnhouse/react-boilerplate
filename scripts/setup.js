const shell = require('shelljs');
const {spawn} = require('child_process');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

shell.rm('-rf', '.git');

spawn('git', ['init'], (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return;
    } 
    console.log(stdout);
});

spawn('git', ['commit', '-am', '"Initial Commit."'], (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return;
    } 
    console.log(stdout);
});
