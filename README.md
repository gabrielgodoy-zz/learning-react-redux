# Project name

Project description

---

## Working with this structure

`npm install` installs dependencies

`npm start` starts project on port 3000

`npm run lint` to report errors in JS and SCSS code style

`npm run build` to generate ./dist folder for production

`npm test` Runs karma, and suite of tests made with Mocha, Chai and Sinon

`npm run test:watch` Runs tests on watch mode

`npm run share` Uses [ngrok](https://github.com/bubenshchykov/ngrok). With the project running in port 3000, run `npm run share` in another terminal tab. A link to share will be generated.

---

## Code Standards
* [Husky](https://github.com/typicode/husky) creates git hooks to prevent bad commits
* [editorconfig](http://editorconfig.org/) is a tool for maintaining consistent coding styles between different editors and IDEs
* [stylelint](https://github.com/stylelint/stylelint) is a CSS linter
* [ESLint](https://github.com/eslint/eslint)  is a linter for JS
    * [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
    * [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
    * [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
    * [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

---

## Framework

* [React](https://github.com/facebook/react)
  * [React-router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/reactjs/redux/tree/master/logo)

---

## Style

---

## Test and coverage

* [Istanbul](https://github.com/gotwarlost/istanbul) to check coverage
* [Mocha](https://github.com/mochajs/mocha) as the test framework 
* [Chai](https://github.com/chaijs/chai) for assertions in Mocha
* [Sinon](https://github.com/sinonjs/sinon) for test spies, stubs and mocks

### Rules
The minimum limit for code coverage is set to 80% in all aspects:

* Statements > 80% 
* Branches > 80% 
* Functions > 80% 
* Lines > 80%
 
If code coverage is less than that you will not be able to commit or push on the project.

---

## Module Bundler and Transpiler

* [webpack 2](https://webpack.js.org/) as a module bundler to split code using ES6 modules
* [babel](http://babeljs.io/) to transpile new JS to JS compatible with most browsers 
