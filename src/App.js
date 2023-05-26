import React from 'react'
import { Provider } from 'react-redux';
import store from './store/index.js'

const App = () => {
  return (
    <Provider store={store}>
      <div>
      app
      </div>
    </Provider>
  )
}

export default App