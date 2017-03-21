import React from 'react';
import axios from 'axios';

import ShowQuote from './ShowQuote/ShowQuote';

axios.get('http://localhost:3000/data/data.json')
     .then((response) => {
       console.log('JSON: ', response);
     })
     .catch((error) => {
       console.log(error);
     });

const AppContainer = () => (
  <div>
    <ShowQuote quote="Teste" />
  </div>);

export default AppContainer;
