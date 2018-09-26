// Command for running locally installed eslint in terminal
// ./node_modules/.bin/eslint yourfile.js

module.exports = {
    "extends": "standard",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-unused-vars": ["error", { "vars": "local", "args": "none"}]
    }
};