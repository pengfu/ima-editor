module.exports = {
  //https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // "extends": "standard",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    // "mocha": true,
  },
  "rules": {
    'eqeqeq': [0, 'allow-null'],
    'no-eval': 1,
    'no-debugger': 2,
    'no-alert': 1,
    'no-use-before-define': 0,
    'no-var': 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "no-unused-vars": 2,
  }
}