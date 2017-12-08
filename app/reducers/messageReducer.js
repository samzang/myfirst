/**
 * Created by zhangshexin on 2017/12/7.
 */
import * as types from '../constants/actionTypes';

const initialState = {
    data: {},
    isLoading: false
}

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case types.TYPE_MESSAGE_ALL:
            return Object.assign({}, state, {data:action.data});
        default:
            return state;
    }
}