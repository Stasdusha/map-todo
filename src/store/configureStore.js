import { createStore } from 'redux'
import rootReducer from '../reducers'

import fireWorker from './../services/firebaseWorker';



const configureStore = (initialState) =>{
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}

export default configureStore;