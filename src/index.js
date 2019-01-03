import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from "./components/ErrorBoundary/ErrorBoundary"
ReactDOM.render(
  <ErrorBoundry render={()=> <p>Opps</p>}>
    <App />
  </ErrorBoundry>, document.getElementById('root')
  );

serviceWorker.unregister();
