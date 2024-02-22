import { legacy_createStore as createStore,applyMiddleware,compose } from 'redux'
import reducers from "./index copy";
import {thunk} from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_|| compose
'/`1'
//This createStore takes couple of 'Arguments      
const store = createStore(     
  reducers,   
  composeEnhancers(applyMiddleware(thunk))   
 // {},//Empty state
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //this is to see the REDUX_DEVTOOLS_EXTENSION in the Browser.
);

export default store;