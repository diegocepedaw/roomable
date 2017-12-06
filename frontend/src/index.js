import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loginSuccess } from './actions';
import roomableApp from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(roomableApp);

const email = window.localStorage.getItem('rmblEmail');
if (email !== null) {
    store.dispatch(loginSuccess(email));
}

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Create an App instance wrapped in a redux store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
