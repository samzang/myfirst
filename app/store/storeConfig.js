/**
 * Created by zhangshexin on 2017/11/20.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';//引入异步操作

import rootReducers from '../reducers/_index';

const middleWares=[thunk];
const createStoreWithMiddleware=applyMiddleware(...middleWares)(createStore);

export default function configureStore(initialState,navReducer) {
    const store=createStoreWithMiddleware(rootReducers(navReducer),initialState);
    return store;
}


