import { applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger'
import ReduxPromise from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(ReduxPromise, thunkMiddleware);
  } else {
    return applyMiddleware(ReduxPromise, thunkMiddleware, createLogger())
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
