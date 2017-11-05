import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import roomableApp from './reducers';
import { getToken } from './actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(roomableApp);

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(getToken('420B7A2E17', 'sally'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
