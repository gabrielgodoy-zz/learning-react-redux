/* eslint-disable */

/*
Este arquivo está com JS que o node consegue entender, já que não é transpilado pelo Babel

Este arquivo faz o seguinte:
1. Configura a variável de ambiente 'test' do Node
2. Registra o babel para transpilar nosso código para teste
3. Desabilita os recursos específicos do Webpack que o Mocha não entende
4. Importa o jsdom para que possamos testar através de um DOM na memória
5. Define variáveis globais que imitam um navegador
*/

/*
Esta configuração garante que a configuracão no bablrc no env "development"
(que inclui código de Hot Module reloading) não se aplique aos testes

Mas também, não queremos configurar os testes para o ambiente "production" do babelrc por dois motivos:
Não terá nenhum aviso de validação de PropType quando o código estiver sendo executado no modo prod
Os testes não exibirão mensagens de erro detalhadas quando executado contra o código de produção
*/

// 1. Configura a variável de ambiente 'test' do Node
process.env.NODE_ENV = 'test';

// 2. Registra o babel para que ele possa transpilar ES6 para ES5 antes de nossos testes serem executados
require('babel-register')();

// 3. Desabilita recursos específicos do webpack para testes já que o Mocha não sabe o que fazer com eles.
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.svg'] = () => null;
require.extensions['.jpg'] = () => null;

// 4. Importa o jsdom para que possamos testar através de um DOM na memória
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// 5. Define variáveis globais que imitam um navegador
const exposedProperties = ['window', 'navigator', 'document'];
const { document } = (new JSDOM('')).window;

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

documentRef = document;
