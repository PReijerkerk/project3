import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary render={()=> <p>Opps</p>}> 
    <App />
  </ErrorBoundary>, document.getElementById('root')
  );

serviceWorker.unregister();
