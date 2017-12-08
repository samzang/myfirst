/**
 * Created by zhangshexin on 2017/11/20.
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import SplashPage from '../pages/SplashPage';
import LoginPage from '../pages/login/LoginPage';
import MainPage from '../pages/MainPage';


const mainNav =StackNavigator({

    SplashPage:{
        screen:SplashPage,
        navigationOptions:{
            header:null
        }
    },
    MainPage:{
        screen:MainPage,
        navigationOptions:{
            header:null
        }
    },
    LoginPage:{
        screen:LoginPage,
        navigationOptions: {
            headerTitle: '登录',
            headerLeft:null,
            headerStyle:{backgroundColor:'#ffd800',height:Platform.OS === "android" ? 45 : 64,},
            headerTitleStyle:{alignSelf:'center',fontSize:17}
        }
    }
});
export default mainNav;