import React, { Component} from 'react'
// import store from './src/redux/store'
import { createStore, combineReducers } from 'redux'
import { Provider} from 'react-redux'
import ShopNavigator from './src/navigation/ShopNavigator';
import productsReducers from './src/redux/reducers/products'

const rootReducer = combineReducers({
  products: productsReducers
})

const store = createStore(rootReducer)
const App= () => {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  )
}

export default App