import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { thunk } from '../middleware/thunk';


//export default configureStore = createStore(rootReducer);
export default createStore(rootReducer, applyMiddleware(thunk));