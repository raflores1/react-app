import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './rootReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userLoggedIn } from './actions/auth';



const store = createStore( rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

if ( localStorage.authJWT ) {
    const user = { token: localStorage.authJWT }
    store.dispatch(userLoggedIn(user));
}

    ReactDOM.render(
    <BrowserRouter>
    <Provider store = { store }>
        <App  />
    </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
