# React + Redux boilerplate (documentation in portuguese)

---

## Trabalhando com essa estrutura

`npm install` ou `yarn install` instala as dependências

Para instalar o [yarn](https://yarnpkg.com/en/) no Mac `brew install yarn`

`npm start` inicia o projeto na porta 3000

`npm run lint` to report errors in JS and SCSS code style

`npm run build` to generate ./dist folder for production

`npm test` Roda os casos de teste feitos com Mocha, Chai e Sinon

`npm run test:watch` Roda os testes em modo --watch

---

## Padrão de código

* [Husky](https://github.com/typicode/husky) cria githook precommit e prepush para previnir commits ruins
* [editorconfig](http://editorconfig.org/) é uma ferramenta para manter o estilo do código consistente entre diferentes editores e IDEs
* [ESLint](https://github.com/eslint/eslint) é um linter de JS
    * [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) Regras padrão do AirBnb
    * [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) suporta linting para a sintaxe do ES6 de módulos import/export
    * [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) regras específicas de ESLint para React
    * [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) regras de acessibilidade para o ESLint
* [stylelint](https://github.com/stylelint/stylelint) é um linter de SCSS
    * [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) Configuração padrão do stylelint
    * [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin de eslint que permite criar regras de ordenação

Dependência Prettier desativada, ainda em estudo:
* [prettier](https://github.com/prettier/prettier) Formatador automático de código, seja ele JS, SCSS, entre outros
    * [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) Desabilita as regras do ESLint que podem entrar em conflito com o Prettier
    * [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) Plugin do ESLint para formatação do Prettier

* [Configurando o Prettier no webstorm](https://github.com/prettier/prettier/blob/master/editors/webstorm/README.md)

---

## Framework

* [React](https://github.com/facebook/react) React isomórfico (Pode rodar no client e no servidor)
  * [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom) React específico para o DOM do browser

* [prop-types](https://github.com/facebook/prop-types) adiciona checagem de tipo para props do React

---

## Incrementos ao React

* [redux](https://github.com/reactjs/redux/) é um container de estado para apps em JS
  * [react-redux](https://github.com/reactjs/react-redux) Bindings do React para trabalhar com o Redux
  * [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) Middleware do Redux que detecta mutações entre os dispatches do Redux. Somente para uso no desenvolvimento.
* [reselect](https://github.com/reactjs/reselect) serve para guardar dados que foram processados através de funções selectors, para que não sejam processados novamente. Com a técnica de memoization.
* [react-router v4](https://github.com/ReactTraining/react-router) O core do React router
    * [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) Pacote do react router que expõe componentes como BrowserRouter, Link e withRouter
    * [react-router-redux](https://github.com/reactjs/react-router-redux) integra o react-router com o redux
* [react-helmet](https://github.com/nfl/react-helmet) é um administrador do header do documento para React

* [react-transition-group](https://github.com/reactjs/react-transition-group) permite animações quando um componente entra ou sai do DOM

---

## Estilo

[node-sass](https://github.com/sass/node-sass) converte o SCSS para CSS usando o compilador [libsass](https://github.com/sass/libsass)
[autoprefixer](https://github.com/postcss/autoprefixer) analisa o CSS e adiciona prefixos para browsers específicos
[normalize.css](https://github.com/necolas/normalize.css/) Uma alternativa aos resets de CSS
[sass-mq](https://github.com/sass-mq/sass-mq) simplifica o trabalho com @media queries

-----------------

## Teste e cobertura

* [Mocha](https://github.com/mochajs/mocha) é um framework de teste
* [Chai](https://github.com/chaijs/chai) para asserções dentro do Mocha
* [Sinon](https://github.com/sinonjs/sinon) para a criação de spies, stubs e mocks

* [react-test-utils](https://reactjs.org/docs/test-utils.html) é uma helper library que facilita a testagem de componentes React em qualquer framework de teste
* [enzyme](https://github.com/airbnb/enzyme) é uma abstração para o React Test Utils, e usa JSDOM por baixo dos panos
* [jsdom](https://github.com/tmpvar/jsdom) DOM virtual em memória

* [Istanbul](https://github.com/gotwarlost/istanbul) para checar a cobertura de testes
    * [NYC](https://github.com/istanbuljs/nyc) é a linha de comando para o instanbul

* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) Serve para criar uma Store fake para testagem de criadores de ação assíncronos e middlewares do Redux
* [moxios](https://github.com/axios/moxios) Mock Axios for unit testing
* [mock-local-storage](https://github.com/letsrock-today/mock-local-storage) LocalStorage fake para rodar testes unitários


Ferramentas em avaliação:

* [plato](https://github.com/es-analysis/plato) Analisa a complexidade da funções

### Regras do teste

O limite mínimo de cobertura de código é 80% nos seguintes aspectos:

- Statements > 80%
- Branches > 80%
- Funções > 80%
- Linhas > 80%

Se a cobertura for menor que isso, o commit e o push serão rejeitados

---

## Transpilador e Module Bundler

* [Webpack](https://webpack.js.org/) module bundler para usar módulos em JS outras tarefas
  * [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) cria um servidor para rodar o app

### Webpack loaders

* [babel-loader](https://github.com/babel/babel-loader) Permite usar Babel integrado ao Webpack
* [css-loader](https://github.com/webpack-contrib/css-loader) interpreta @import e url() como requires para o Webpack
* [dsv-loader](https://github.com/wbkd/dsv-loader) possibilita o carregamento de arquivos dsv (e.g. .csv or .tsv)
* [eslint-loader](https://github.com/MoOx/eslint-loader) é o loader do ESLint para Webpack
* [file-loader](https://github.com/webpack-contrib/file-loader) pode carregar qualquer tipo de arquivo
* [html-loader](https://github.com/webpack-contrib/html-loader) exporta HTML como string. HTML é minificado quando o compilador demanda
* [import-glob-loader](https://github.com/Aintaer/import-glob-loader) expande padrões de globbing para imports de SCSS
* [imports-loader](https://github.com/webpack-contrib/imports-loader) permite o uso de módulos que dependem de variáveis globais específicas como "jQuery"
* [postcss-loader](https://github.com/postcss/postcss-loader) PostCSS loader para processar o CSS com plugins de PostCSS como o autoprefixer
* [react-hot-loader](https://github.com/gaearon/react-hot-loader) Hot reload específico para React
* [sass-loader](https://github.com/webpack-contrib/sass-loader) compila Sass para CSS
* [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) compartilha variáveis e mixins em todos os arquivos sem ter que fazer @import
* [style-loader](https://github.com/webpack-contrib/style-loader) adiciona CSS ao DOM injetando uma tag <style>
* [url-loader](https://github.com/webpack-contrib/url-loader) funciona como o file loader, mas retorna o arquivo em DataUrl se ele for menor que um limite de bytes definido

### Plugins para o Webpack

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) Simplifica a criação de arquivos HTML para servir os bundles do Webpack
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) Extrai texto de um bundle e transforma em um arquivo, como CSS por exemplo
* [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin) Copia arquivos e diretórios na pasta de output do Webpack
* [stylelint-webpack-plugin](https://github.com/JaKXz/stylelint-webpack-plugin) Plugin para integrar o stylelint com o Webpack

---

## Transpilador de JS

* [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) O compilador core do Babel
* [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli) Babel na linha de comando
* [babel-polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) série de polyfills para utilizar `Promises`, `Object.assign` e outras features com suporte aos browsers modernos
*[babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) Permite usar o babel via require('babel-register')

### Presets e plugins para o Babel

* [babel-preset-env](https://github.com/babel/babel/tree/master/experimental/babel-preset-env) permite definir quais browsers se quer dar suporte para que o babel faça somente o trabalho necessário
* [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0) Conjunto de regras para dar suporte a sintaxe do JS ainda em estágio 0 de aprovação
* [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) Conjunto de plugins específicos para React
* [babel-eslint](https://github.com/babel/babel-eslint) permite que todo o código válido do Babel passe no ESLint, é definido no "parser" do arquivo babelrc
* [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime) permite que se evite funções do Babel duplicadas entre múltiplos arquivos
* [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) Adiciona o Instanbul para código ES6
* [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) Transform as props "styleName" para "className" usando a resolução dos CSS módulos em tempo de compilação
* [babel-plugin-transform-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread) Plugin para transformar a notação spread o JS

---

## Outras ferramentas

* [npm-run-all](https://github.com/mysticatea/npm-run-all) Uma ferramenta de linha de comando para executar múltiplos scripts npm em paralelo ou de forma sequencial
* [axios](https://github.com/axios/axios) Faz requests HTTP baseado em Promises, para uso no browser e node.js
* [moment](https://github.com/moment/moment) analisa, valida, manipula e exibe datas em JS
    * [moment-timezone](https://github.com/moment/moment-timezone) adiciona suporte de timezone ao moment
* [lodash](https://github.com/lodash/lodash) biblioteca com um conjunto de helpers para operações rotineiras em JS
* [exif-js](https://github.com/exif-js/exif-js) lê os metadados EXIF de uma imagem
