# enforcing-convensional-commit

> a minimum tool for enforcing your repository to hook conventional commits at git commit.

## Usage

<code id="install_command">
npm i enforcing-convensional-commit -D
</code>

You can enforce developpers to install the git-hook script if you follow the above way when each users initialize your repository with `npm install`.

Alternatively,  
if you wish to install the git-hook script just for you,  
you can install it by npx:  
`npx enforcing-convensional-commit`  
or by just running sh script directly from web:  
<code id="sh_command">
source <(curl -s https://raw.githubusercontent.com/yabe-diverta/enforcing-convensional-commit/main/install)
<code id="sh_command">

## Bonus

:question: We already hold a repository, how enforce developpers to respect it?

execute the first command [we mentioned at first](#install_command),  
just notice your coworkers to run `git pull && npm install`.

:question: We use PHP, not using Node, how we setup?

[the first command](#install_command) is completely for a repository using npm project,  
therefore if you wish to follow the same way,  
you can add some lines like as post-install event hook suited for your language.

for example, your PHP project should be using [Composer](https://getcomposer.org/),  
[post-install-cmd](https://getcomposer.org/doc/articles/scripts.md#command-events) may work with [the 3rd command](#install_command).

:question: I want to follow the way but in a global configuration for personal use.

please run `source <(curl -s https://raw.githubusercontent.com/yabe-diverta/enforcing-convensional-commit/main/install.global)`
