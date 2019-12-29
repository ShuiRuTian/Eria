# typescipt-boilerplate
typescript boilerplate with webpack

## git hook
use `husky` as git hook helper.

use `lint-stage` as default precommit hook. 

This will check commit file, however, webpack should have already checked. 

And this provide a convience way to do something else.

## linter
use `eslint` as linter.

## module bundler
use `webpack` as resource bundler.

### Some Recommandation and reasion
1. all configuration file should be named as "tsconfig.json"
>Reason1: eslint
    1. for eslint parser `@typescript-eslint/parser`, if we would like to use some rules which require type information(such as @typescript-eslint/await-thenable), we need to provide a value for the "parserOptions.project". 
    2. However, although its name is project, if we give a [
Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) file, it could not resolve correctly.
    4. due to 1 and 2, we have to use another function provided by `@typescript-eslint/parser`  ---- glob pattern, which likes "./**/tsconfig.json"
>Reason2: vscode support 
    see [webpack](./webpack/README.md)

2. some function are provided by many parts, such as no-var is provided by both eslint and tsc, I recommand write it in eslint.