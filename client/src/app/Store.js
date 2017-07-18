"use strict";
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

// neat middleware that logs actions
const loggerMiddleware = createLogger()
const Store = createStore(
	rootReducer,
    applyMiddleware(thunk, loggerMiddleware)
);

export store;
