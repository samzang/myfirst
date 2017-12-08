/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';
import CodePush from 'react-native-code-push';

import mainNav from './navigaters/mainNav';






export default class App extends React.Component {

    componentDidMount() {
        console.log("进来了------------");
        // try {
        //     codePush.checkForUpdate()
        //         .then((update) => {
        //             if (!update) {
        //                 console.log("app是最新版了");
        //             } else {
        //                 console.log("有更新哦");
        //             }
        //         });
        // } catch (e) {
        //     console.error("error:\n" + e.toString());
        // }

            CodePush.sync({
                updateDialog: {
                    appendReleaseDescription: true,
                    descriptionPrefix:'\n\n更新内容：\n',
                    mandatoryContinueButtonLabel: '更新',
                    mandatoryUpdateMessage: '有新版本了，请您及时更新',
                    optionalIgnoreButtonLabel: '稍后',
                    optionalInstallButtonLabel: '后台更新',
                    optionalUpdateMessage: '有新版本了，是否更新？',
                    title: '更新提示'
                },
                mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE
            });
    }

    goLogin(){
        const {navigate} = mainNav.navigation.create();
        navigate('loginPage');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    88888 Welcome to React Native!
                </Text>
                <TouchableOpacity onPress={()=>this.goLogin()}>
                    <Text>请登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

App = CodePush(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
