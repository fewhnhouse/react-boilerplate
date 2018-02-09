const shell = require('shelljs');
const {exec} = require('child_process');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

shell.rm('-rf', '.git');

exec('git init && git add . && git commit -m "Initial Commit."', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
