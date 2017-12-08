/**
 * Created by zhangshexin on 2017/11/17.
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';
import Page3 from './Page3';
import TableNavigator from './TablesRouter';

const RootNavigator =StackNavigator({
    Home:{
        screen:Page3,
        navigationOptions: {
            headerTitle: '主页'
        }
    },
    TableRouter:{
        screen:TableNavigator,
        navigationOptions: {
            headerTitle: '次页'
        }
    },
    // TablePage:{
    //     screen:Tables
    // },

});
export default RootNavigator ;