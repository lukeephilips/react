import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import App from "./components/App";
import {Provider} from 'react-redux';

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider>
      <Component/>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
