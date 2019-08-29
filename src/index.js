
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//kate: render the app to the root element of index.html
ReactDOM.render(<App />, document.getElementById('reactapp'));
serviceWorker.unregister();
