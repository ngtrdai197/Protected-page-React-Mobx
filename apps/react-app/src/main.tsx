import 'reflect-metadata';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { StoreContext, store } from './app/mobx-store';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      {/*<StoreContext.Provider value={store}>*/}
      <App />
      {/*</StoreContext.Provider>*/}
    </BrowserRouter>
  </React.Fragment>
  ,
  document.getElementById('root')
);
