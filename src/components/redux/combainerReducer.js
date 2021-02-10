import { combineReducers , createStore } from 'redux';
import {reducerState} from './reducer'


const reducers = combineReducers({
    reducerState: reducerState
  });

export const Store = createStore(reducers)

