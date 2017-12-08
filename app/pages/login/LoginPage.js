/**
 * Created by zhangshexin on 2017/11/20.
 */
import React from 'react';
import Hash from 'jshashes';
import BaseComponent from '../../base/BaseComponent';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    Modal,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';

import store from '../StorageManage';
import * as actions from '../../actions/LoginAction';
import {post} from '../Api';




/**
 * 登录页
 * by sam
 */
class LoginPage extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            password: '',
            showLoading:false,
            warningState:false,//错误显示状态
            warningText:"",//错误提示内容
        };
    }
    buildSign = (params) => {
        const appsecret=(Platform.OS === 'android' ? 'c023b3cde760452aa16f311ba1565fa2' : 'i3gfr952ge84h54t5fe94ghe2f2995ef');
        const sortKeys = Object.keys(params);
        let str = '';
        sortKeys.sort().forEach((key) => {
            console.log('key',key,params[key]);
            str += (key + params[key]);
        });
        str = appsecret + str + appsecret;
        str = new Hash.SHA1().hex(str);

        return str.toUpperCase();
    };

    login2(){
        console.log(this.state.number+"    "+this.state.password)
        this.setState({showLoading:true});
        this.numberInput.blur();
        this.passwordInput.blur();

        let data={
            mobile: '15311413519',
            password: '000000a',
            method:'bqj.user.person.login'
        };


        let params={};
        params.appKey=Platform.OS === 'android' ? '22806390' : '86242105';
        params.method='bqj.user.person.login';
        params.format='json';
        params.v='1.0';
        params.local='zh_CN';
        params.timeStamp=Date.now();
        let p={...params,...data};

        const sign=this.buildSign(p);
        params.sign=sign;
        let postparams = {};
        console.log('data===>',  data);
        const sortKeys = Object.keys(data);
        sortKeys.sort().forEach((key) => {
            // console.warn(key,data[key],encodeURIComponent(data[key]));
            postparams[key] = encodeURIComponent(data[key]);
        });
        params = {...params, ...postparams};
        params = {...{sign}, ...params};
        console.log(params);
        const jsonData = getParam(params);






console.log(jsonData);
        fetch("https://api.bqj.cn/api",{
            method: 'POST',
            cache: 'no-cache',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            },
            body: jsonData
        }).then((response) => response.json()).then((responseJson)=>{
            console.log("有了："+JSON.stringify(responseJson));
            //保存用户信息
            let userInfo={
                id:responseJson.resultObj.id, // 用户id
                name:responseJson.resultObj.name, // 名字
                nickName:responseJson.resultObj.nickName, // 昵称
                photo:responseJson.resultObj.photo, //  头像
                mobile:responseJson.resultObj.mobilePhone, // 手机号
                token: responseJson.sessionId, // token
                status:responseJson.resultObj.realNameStatus === "complete_real_name" ? true:false,
                cardStatus:responseJson.resultObj.expireStatus,
            };
            this.props.dispatch(actions.receiveLoginUserInfo(userInfo))
            return  store.saveUserInfo(userInfo);
        }).then(()=>{
            // 登录完成跳转到首页
            this.props.navigation.navigate('MainPage');
        }).catch((error)=>{
            console.log("错误了");
        })
    }

    login(){
        let signData={
            mobile: '15311413519',
            password: '000000a',
            method:'bqj.user.person.login'
        };
        post(signData,null).then((res)=>{
            console.log("有了："+JSON.stringify(res));
            //保存用户信息
            let userInfo={
                id:responseJson.resultObj.id, // 用户id
                name:responseJson.resultObj.name, // 名字
                nickName:responseJson.resultObj.nickName, // 昵称
                photo:responseJson.resultObj.photo, //  头像
                mobile:responseJson.resultObj.mobilePhone, // 手机号
                token: responseJson.sessionId, // token
                status:responseJson.resultObj.realNameStatus === "complete_real_name" ? true:false,
                cardStatus:responseJson.resultObj.expireStatus,
            };
            this.props.dispatch(actions.receiveLoginUserInfo(userInfo))
            return  store.saveUserInfo(userInfo);
        }).then(()=>{
            // 登录完成跳转到首页
            this.props.navigation.navigate('MainPage');
        }).catch((error)=>{
            console.log("错误了啦啊啊啊"+JSON.stringify(error))
        })
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={require('../../images/logo.png')} style={styles.logoImage}/>
                <TextInput ref={(e)=>{this.numberInput=e}} placeholder={'请输入手机号'} placeholderTextColor={'#000000'} keyboardType={'numeric'}
                           onChangeText={(text) => {
                               this.setState({number: text});
                           }}
                           value={this.state.number}
                           onBlur={()=>{this.setState({warningState:true,warningText:"啦啦啦"})}}
                />
                <TextInput ref={(e)=>{this.passwordInput=e}} placeholder={'请输入密码'} placeholderTextColor={'#000000'} returnKeyType={'done'}
                           onChangeText={(text) => {
                               this.setState({password: text});
                           }}
                           value={this.state.password}
                           secureTextEntry={true}
                />
                <TouchableOpacity style={styles.loginBtn} onPress={()=>this.login()}>
                    <Text>登录</Text>
                </TouchableOpacity>
                <Modal
                    visible={this.state.warningState}
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={()=>{this.setState({warningState:false})}}
                    onShow={()=>{this.timer=setTimeout(()=>{this.setState({warningState:false})},1000)}}>
                    <View style={styles.alertModal}>
                        <Text style={styles.modalBlackView}>{this.state.warningText}</Text>
                    </View>
                </Modal>
                {
                    this.state.showLoading&&
                    <View style={{
                        position:'absolute',
                        top:0,
                        right:0,
                        bottom:0,
                        left:0,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0)'
                    }}>
                        <ActivityIndicator size='large'/>
                    </View>
                }
            </ScrollView>
        )
    }
}
const getParam = data => {
    return Object.entries(data).map(([key, value]) => {
        // TODO 是否得用encodeURI函数
        return `${key}=${value}`;
    }).join('&');
};


const mapStateToProps = (state) => {
    return {
        stores:state.loginReducer
    };
}
export default connect()(LoginPage);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    logoImage: {
        marginTop: 40,
        marginBottom:40,
        alignSelf: "center"
    },
    loginBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffd800',
        height:45,
        marginHorizontal:15,
        marginTop:11
    },
    alertModal:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    modalBlackView: {
        height: 100,
        width: Dimensions.get('window').width - 175,
        backgroundColor: 'rgba(49,49,49,1)',
        borderRadius: 5,
        padding: 5,
        textAlign:'center',
    }
})