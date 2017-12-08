/**
 * Created by zhangshexin on 2017/11/21.
 */
import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StatusBar,
    Platform,
    NativeModules
} from 'react-native';

import {connect} from 'react-redux';
import BaseComponent from '../base/BaseComponent';
import store from './StorageManage';


const SYS_HEIGHT = Dimensions.get('window').height;
const SYS_WIDTH = Dimensions.get('window').width;
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

class SplashPage extends BaseComponent {

    // 界面渲染完成的回调
    componentDidMount() {
        // 开始计时
        this.timer = setTimeout(
            () => {
                const {navigation} = this.props.navigation.navigate;
                console.log(this.props.navigation);
                console.log("-------");
                if(Platform.OS==='android')
                    NativeModules.SplashScreenModul.hide();
                //3秒之后的操作
                //判断是否已登录，否则去登录页
                const user = store.getUserInfo();
                console.log("start-------user:");
                console.log(user);
                console.log("end-------user:");
                if(user.isLogined){
                    this.props.navigation.navigate('MainPage'); // 页面跳转
                }else{
                    this.props.navigation.navigate('LoginPage');
                }

            },
            1000
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>
                <Image source={require('../images/launch_screen.png')}
                       style={{width:SYS_WIDTH,height:SYS_HEIGHT-statusBarHeight}}
                       resizeMode={Image.resizeMode.cover}/>

            </View>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        stores:state
    };
}
export default  connect()(SplashPage)