/**
 * Created by zhangshexin on 2017/11/20.
 */

import {combineReducers} from 'redux';


import loginReducer from './loginReducer';
import messageReducer from './messageReducer';

export default function rootReducer(navReducer){
    return combineReducers({
        loginReducer,
        messageReducer,
        nav:navReducer
    });
} ;