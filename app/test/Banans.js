/**
 * Created by zhangshexin on 2017/11/7.
 */
import React, {Component} from 'react';
import {AppRegistry, Image,StyleSheet} from 'react-native';

const _style = StyleSheet.create({
    pic: {
        width: 193,
        height: 110
    }
});
export default class Banans extends Component {


    render() {
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <Image source={pic} style={_style.pic}/>
        );
    }
}
