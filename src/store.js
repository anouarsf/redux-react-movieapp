import {createStore} from 'redux' ;
import Reduce from './Reducer/Reducer'
export const store = createStore(  Reduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;


