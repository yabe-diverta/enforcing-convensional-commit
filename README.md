# enforcing-convensional-commit

> a minimum tool for enforcing your repository to hook conventional commits at git commit.

## Usage

`npm i enforcing-convensional-commit -D && npx -y npm-add-script -k postinstall -v "enforcing-convensional-commit"`

You can enforce developpers to install the git-hook script if you follow the above way when each users initialize your repository with `npm install`.

Alternatively,  
if you wish to install the git-hook script just for you,  
you can install it by npx:  
`npx enforcing-convensional-commit`  
or by just running sh script directly from web:  
`source <(curl -s https://raw.githubusercontent.com/yabe-diverta/enforcing-convensional-commit/main/install)`
