import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const handleSubmit = (state =[], action) => {
    if(action.type === 'SUBMIT'){
        console.log(action);
        return [...state, action.payload];
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        handleSubmit
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
