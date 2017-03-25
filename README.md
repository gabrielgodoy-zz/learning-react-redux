# React boilerplate

Experimentation project with nice tech put together

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
  * [React-router v4](https://github.com/ReactTraining/react-router)
  * [react-router-redux](https://github.com/reactjs/react-router-redux) add bindings to keep react-router and redux in sync 
* [Redux](https://github.com/reactjs/redux/) is a state container for JavaScript apps 

---

## Style

[React CSS Modules](https://github.com/gajus/react-css-modules) CSS modules inside of React components
[Autoprefixer](https://github.com/postcss/autoprefixer) Parse CSS and add vendor prefixes to rules by Can I Use

-----------------

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

* [Webpack 2](https://webpack.js.org/) as a module bundler to split code using ES6 modules
  * [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) serves a webpack app. Updates the browser on changes.
  * [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) is a simple wrapper middleware for webpack to be used in conjunction with Express or another server **Development only**
  * [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) is webpack hot reloading that you can attach to your own server

### Webpack loaders
  
* [css-loader](https://github.com/webpack-contrib/css-loader) interprets @import and url() like requires.
* [dsv-loader](https://github.com/wbkd/dsv-loader) load dsv (e.g. .csv or .tsv) files.
* [eslint-loader](https://github.com/MoOx/eslint-loader) is a loader for webpack
* [file-loader](https://github.com/webpack-contrib/file-loader) can load any type of file
* [html-loader](https://github.com/webpack-contrib/html-loader) exports HTML as string. HTML is minimized when the compiler demands.
* [import-glob-loader](https://github.com/Aintaer/import-glob-loader) expands globbing patterns for SCSS import statements.
* [imports-loader](https://github.com/webpack-contrib/imports-loader) allows you to use modules that depend on specific global variables, like jQuery for example
* [postcss-loader](https://github.com/postcss/postcss-loader) PostCSS loader for webpack to postprocesses your CSS with PostCSS plugins
* [React Hot Loader](https://github.com/gaearon/react-hot-loader) Hot reload specific for React
* [sass-loader](https://github.com/webpack-contrib/sass-loader) compiles Sass to CSS 
* [Sass Resource Loader](https://github.com/shakacode/sass-resources-loader) is also used to share variables and mixins across all files without having to do @import every time
* [style-loader](https://github.com/webpack-contrib/style-loader) adds CSS to the DOM by injecting a <style> tag
* [url-loader](https://github.com/webpack-contrib/url-loader) The url loader works like the file loader, but can return a Data Url if the file is smaller than some byte limit defined

### Webpack plugins

* [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) Simplifies creation of HTML files to serve your webpack bundles
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) Extract text from bundle into a file, like css for example
* [CopyWebpackPlugin](https://github.com/kevlened/copy-webpack-plugin) Copy files and directories in webpack to output folder

* [Babel](http://babeljs.io/) to transpile new JS to JS compatible with most browsers 

## Other tools


