const shell = require('shelljs');
const readline = require('readline');
const {exec} = require('child_process');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Do you really want to clean this Repository and initialize a new one? [y/n]', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        console.log(`Answer [${answer}] received. Starting clean process...`);
        rl.close();
        clean();
    } else {
        console.log(`Answer [${answer}] received. Stopping process.`);
        rl.close();
        return;
    }
});

function clean() {
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
}
