module.exports = {
    "extends": [
        "@apify"
    ],
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "extends": [
                "@apify",  
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": "./tsconfig.json"
            },
            "plugins": ["@typescript-eslint"],
            "rules": {
                // PropTypes are replaced with Types in Typescript
                "react/prop-types": "off",
                // note you must disable the base rule as it can report incorrect errors
                "no-unused-vars": "off",
                // This rule extends the base eslint/no-unused-vars rule. It adds support for TypeScript features, such as types.
                "@typescript-eslint/no-unused-vars": ["error"],
                // Allow semicolons at the end of the code block
                "@typescript-eslint/no-extra-semi": "off"
            }
        }
    ]
};
