import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { keepReducer } from './keep';

const rootReducer = combineReducers({
  keeps: keepReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
