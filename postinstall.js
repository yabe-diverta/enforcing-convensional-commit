#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const installScript = path.resolve(__dirname, 'install');

const projectDir = process.env.INIT_CWD || path.resolve('../../', __dirname);
process.chdir(projectDir);

execSync(installScript, { stdio: 'inherit' });
