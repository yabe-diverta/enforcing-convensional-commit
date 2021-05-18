#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const installScript = path.resolve(__dirname, 'install');

try {
    execSync(installScript, {stdio: 'inherit'});
    console.info(`
        The custom git hook is installed to your repository.
        See ./.git/hooks/commit-msg
    `);
} catch(e) {
    console.error(e);
}
