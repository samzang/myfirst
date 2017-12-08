/**
 * Created by zhangshexin on 2017/11/17.
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';
import Page1 from './Page1';
import Page2 from './Page2';

const RootNavigator =StackNavigator({

    Page1:{
        screen:Page1,
        navigationOptions: {
            headerTitle: '主页'
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions: {
            headerTitle: '次页'
        }
    },
    // TablePage:{
    //     screen:Tables
    // },

});
export default RootNavigator ;