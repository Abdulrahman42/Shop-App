import { createStore, combineReducers, applyMiddleware } from 'redux'

import { logger, promise } from './middleware'
import productsReducer from './reducers/products'


const reducers = combineReducers({
    products : productsReducer
})

const store = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default store