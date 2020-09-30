# Usage

## Install:

```bash
npm install --save-dev eslint typescript @apify/eslint-config-ts @typescript-eslint/eslint-plugin @typescript-eslint/parser 
```

## Add to `.eslintrc` file:

```json
{
  "extends": "@apify/eslint-config-ts"
}
```

NOTE (from https://eslint.org/docs/developer-guide/shareable-configs): 
  
When using scoped modules it is not possible to omit the eslint-config- prefix. Doing so would result in package naming conflicts, and thus in resolution errors in most of cases. For example a package named @scope/eslint-config-myconfig vs @scope/my-config, since both are valid scoped package names, the configuration should be specified as:

```json
{
    "extends": "@scope/eslint-config-myconfig"
}
```


## Create `tsconfig.json` file in the root of the project and add:
```
{}
```
List of all options https://www.typescriptlang.org/tsconfig

### Example minimal setup (used on Web)
```json
{
    "compilerOptions": {
        "skipLibCheck": true,
        "esModuleInterop": true,
        "jsx": "preserve",
        "noUnusedLocals": true,
        "noUnusedParameters": true
    },
    "exclude": [
        "node_modules",
    ],
    "include": [
        "**/*.ts",
        "**/*.tsx"
    ]
}
```

`skipLibCheck`: 
Skips typechecking of 3rd party libraries declaration files (extension .d.ts) since they may have different tsconfig

`esModuleInterop`: 
Allows eg "import React from 'react'" instead of "import * as React from 'react'"

`jsx`: 
Allows use of JSX tags

`noUnusedLocals`: 
Error on unused variables

`noUnusedParameters`: 
Error on unused function params


## Edit eslint npm script to include .ts, .tsx files and to run typescript validation
```json
"eslint --ext .js,.jsx,.ts,.tsx ; tsc --noemit"
```