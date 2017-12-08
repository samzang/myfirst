/**
 * Created by zhangshexin on 2017/11/20.
 */
import * as types from '../constants/actionTypes';

const initialState={
    data:{},
    isLoading:false
}

export default function loginReducer(state=initialState,action){
    switch (action.type){
        case types.TYPE_LOGIN_FAIL:
            return Object.assign({},state,{data:null});
        case types.TYPE_LOGIN_ING:
            return Object.assign({},state,{data:action.data});
        case types.TYPE_LOGIN_SUCCESS:
            console.log(111111111)
            console.log(Object.assign({},state,{data:action.data}))
            console.log(2222222222)
            return Object.assign({},state,{data:action.data});
        default:
            return state;
    }
}