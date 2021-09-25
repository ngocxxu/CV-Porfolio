import {combineReducers, createStore} from 'redux'
import { MenuReducer } from './reducers/MenuReducer';


const rootReducer = combineReducers({
MenuReducer: MenuReducer,
});

export const store = createStore(rootReducer);