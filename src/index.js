
import React from  "react";
import ReactDOM from "react-dom";

import { AppContainer } from 'react-hot-loader';

import App from "./App.js";

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('App')
    )
  }
  
  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
  }