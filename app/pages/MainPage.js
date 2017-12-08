/**
 * Created by zhangshexin on 2017/11/21.
 */
import React from 'react';
import BaseComponent from '../base/BaseComponent';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import CodePush from 'react-native-code-push';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RightMenu from '../component/RightMenu';

import {fetchMessageList} from '../actions/MessageAction';



const navHeight = Platform.OS === 'android'?45:64;
const SYS_HEIGHT=Dimensions.get('window').height;
const SYS_WIDTH = Dimensions.get('window').width;
class MainPage extends BaseComponent {

    constructor(props){
        super(props);
        this.state={
            isShowMenu:false
        }
    }


    componentDidMount() {
        console.log(this.props);
        CodePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix: '\n\n更新内容：\n',
                mandatoryContinueButtonLabel: '更新',
                mandatoryUpdateMessage: '有新版本了，请您及时更新',
                optionalIgnoreButtonLabel: '稍后',
                optionalInstallButtonLabel: '后台更新',
                optionalUpdateMessage: '有新版本了，是否更新？',
                title: '更新提示'
            },
            mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE
        });
        //加载消息内容
        this.props.fetchMessageList();
    }

    /**
     * 显示右侧按钮列
     */
    showRightBtnList(){
        if(this.state.isShowMenu){
            this.menuList._closePress();
        }
        else{
            this.setState({isShowMenu:true});
            this.menuList.showMenuAction();
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigator}>
                    <TouchableOpacity>
                        <Image source={require('../images/home_ic_kefu.png')} style={styles.navLeftBtnImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.showRightBtnList()}>
                        <Image source={require('../images/home_ic_prompt.png')} style={styles.navRightBtnImg}/>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{minHeight: 504, flex: 1}}>
                    <View style={styles.introduceMessage}>
                        <Image source={require('../images/logoapp.png')} style={{marginTop: 30}}/>
                        {
                            SYS_WIDTH > 370
                                ? <View style={styles.dciDescription}>
                                    <Text style={{fontSize: 16, color: '#000000'}}>中国版权保护中心DCI研发战略合作伙伴</Text>
                                    <Text style={{fontSize: 16, color: '#000000', marginTop: 12}}>累计版权服务570,000+次</Text>
                                </View>
                                : <View style={styles.dciDescription}>
                                    <Text style={{fontSize: 16, color: '#000000'}}>中国版权保护中心DCI</Text>
                                    <Text style={{fontSize: 16, justifyContent: 'flex-start', color: '#000000'}}>研发战略合作伙伴</Text>
                                    <Text style={{fontSize: 16, color: '#000000', marginTop: 12}}>累计版权服务570,000+次</Text>
                                </View>
                        }
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex:1}}/>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1}}/>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.actionBtn}>
                                    <Image source={require('../images/home_ic_regist.png')}/>
                                    <Text style={styles.actionBtnTitle}>申请登记</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}/>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.actionBtn}>
                                    <Image source={require('../images/home_ic_lib.png')}/>
                                    <Text style={styles.actionBtnTitle}>我的作品</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}/>
                        </View>

                        <View style={{flex:1}}/>

                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1}}/>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.actionBtn}>
                                    <Image source={require('../images/ic_home_zpk.png')}/>
                                    <Text style={styles.actionBtnTitle}>作品库</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}/>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.actionBtn}>
                                    <Image source={require('../images/home_ic_applicat.png')}/>
                                    <Text style={styles.actionBtnTitle}>申请单</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}/>
                        </View>

                        <View style={{flex:1}}/>
                    </View>
                </ScrollView>
                {
                    this.state.isShowMenu&&<View style={{position: 'absolute',top:navHeight,width: SYS_WIDTH,height: Platform.OS === 'android' ? SYS_HEIGHT- 64: SYS_HEIGHT - 45,backgroundColor: 'rgba(0,0,0,0.3)',}}>
                    </View>
                }
                <RightMenu
                    ref={(ref) => { this.menuList = ref } }
                    isAnimated={this.state.isShowMenu}
                    isOpen={(isShow)=>{this.setState({isShowMenu:isShow})}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    navigator: {
        height: Platform.OS === 'android' ? 45 : 64,
        paddingTop: Platform.OS === 'android' ? 0 : 20,
        backgroundColor: '#ffd900',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navLeftBtnImg: {
        marginLeft: 15,
        marginTop: 11,
        marginRight: 15,
    },
    navRightBtnImg: {
        marginLeft: 15,
        marginTop: 13,
        marginRight: 15,
    },
    introduceMessage: {
        backgroundColor: '#ffd900',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccad00',
        borderBottomWidth: 0,
        height: 210,
    },
    dciDescription: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    action:{
        alignItems:'center',
        justifyContent:'center',
    },
    actionBtn:{
        width:128,
        height:128,
        alignItems:'center',
        backgroundColor:'#ffd900',
        justifyContent:'center',
        borderRadius:10
    },
    actionBtnTitle:{
        fontSize:18,
        color:'#000000',
        marginTop:12
    }
});

const mapStateToProps = (state) => {
    return {
        loginReducer:state.loginReducer,
        messageReducer:state.messageReducer
    };
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchMessageList:bindActionCreators(fetchMessageList,dispatch)
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);