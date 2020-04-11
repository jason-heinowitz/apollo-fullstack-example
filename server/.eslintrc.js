module.exports = { 
  "root": true,
  "extends": ["airbnb", "airbnb/hooks", "plugin:json/recommended"],
  "plugins": ["json"],
  "rules": {
    "no-console": "off",
    "func-names": "off",
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  }
}