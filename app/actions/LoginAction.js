/**
 * Created by zhangshexin on 2017/12/7.
 */
import * as types from '../constants/actionTypes';

export function receiveLoginUserInfo(data){
    return {
        type:types.TYPE_LOGIN_SUCCESS,
        data:data
    };
}