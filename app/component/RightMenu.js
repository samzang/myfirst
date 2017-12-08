/**
 * Created by zhangshexin on 2017/11/27.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    BackHandler,
    NetInfo,
    TouchableWithoutFeedback,
    Animated,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
    ScrollView
} from 'react-native';





let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

export default class RightMenu extends Component {

    constructor(props) {
        super(props);
        console.log("WIDTH"+WIDTH+"HEIGHT"+HEIGHT);
        this.state={
            isAnimated:false,
            rightSlide:new Animated.Value(WIDTH)
        }
        this.isAnimating=false;
    }

    componentDidUpdate() {
        if(this.isAnimating){
            this.isAnimating=false;
            Animated.timing(this.state.rightSlide,{
                toValue:0,
                duration:300
            }
            ).start();
        }
    }

    componentDidMount() {
        console.log(this.props);
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack();
            return true;
        });
    }

    showMenuAction = () => {
        this.setState({ isAnimated: true });
        this.isAnimating = true;
    }

    _closePress = () => {
        Animated.timing(this.state.rightSlide, {
                toValue: WIDTH,
                duration: 300,
            }
        ).start(
            () => {
                this.props.isOpen(false);
                this.setState({ isAnimated: false });
            });
    }

    render() {
        return(
            <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'red' }} onPress={this._closePress}>
                <Animated.View style={[styles.container, { transform: [{ translateX: this.state.rightSlide }] }]}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <View style={styles.menuList}>
                            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 10, }}>
                                <TouchableOpacity style={styles.action} >
                                    <View style={styles.actionBtn}>
                                        <Image source={require('../images/home_ic_my.png')} />
                                    </View>
                                    <View style={{position: 'absolute', top: 0, right: 30, width:15, height:15, backgroundColor: '#ff2733', borderRadius: 15,}}></View>
                                    <Text style={styles.actionBtnTitle}>个人中心</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action} >
                                    <View style={styles.actionBtn}>
                                        <Image source={require('../images/home_ic_mess.png')} />
                                    </View>
                                    <View style={styles.navMessageMark}><Text style={styles.navMessageNum}>1</Text></View>
                                    <Text style={styles.actionBtnTitle}>消息</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action} >
                                    <View style={styles.actionBtn}>
                                        <Image source={require('../images/home_ic_wiki.png')} />
                                    </View>
                                    <Text style={styles.actionBtnTitle}>版权学堂</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action} >
                                    <View style={styles.actionBtn}>
                                        <Image source={require('../images/ic_addserver.png')} />
                                    </View>
                                    <Text style={styles.actionBtnTitle}>增值服务</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action} >
                                    <View style={styles.actionBtn}>
                                        <Image source={require('../images/home_ic_about.png')} />
                                    </View>
                                    <Text style={styles.actionBtnTitle}>关于我们</Text>
                                </TouchableOpacity>
                            </ScrollView>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} >
                                <View style={{ borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 25, width: 95, backgroundColor: '#ffd900', marginBottom: 15, marginTop: 10 }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>退出登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: WIDTH,
        height: Platform.OS === 'android' ? HEIGHT - 45 - StatusBar.currentHeight : HEIGHT - 64,
        zIndex: 999,
        top: Platform.OS === 'android' ? 45 : 64,
    },
    menuList: {
        width: 125,
        backgroundColor: '#000000',
    },
    navMessageMark: {
        position: 'absolute',
        top: 0,
        right: 30,
        backgroundColor: '#ff2733',
        borderRadius: 7,
    },
    navMessageNum: {
        fontSize: 12,
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ffd900',
        marginLeft: 4,
        marginRight: 4,
    },
    action: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingTop: 5
    },
    actionBtn: {
        width: 48,
        height: 48,
        backgroundColor: '#ffd900',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    actionBtnTitle: {
        color: '#ffd900',
        marginTop: 8,
        fontSize: 14,
    },
});
