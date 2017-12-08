/**
 * Created by zhangshexin on 2017/12/7.
 */
import * as types from '../constants/actionTypes';


export const reciveMessageList=(data)=> {
    return {
        type:types.TYPE_MESSAGE_ALL,
        data:data
    };
}

export const  fetchMessageList=()=>{
    return (dispatch,getState)=>{
       let id= getState().loginReducer.data.id;
        console.log("-------come on!!--------"+id);
        dispatch(reciveMessageList({id:id}));
    };
}