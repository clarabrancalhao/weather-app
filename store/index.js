import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from '../modules'

const middlewares = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
