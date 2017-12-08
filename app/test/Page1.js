/**
 * Created by zhangshexin on 2017/11/7.
 */
import React from 'react';
import {View, Text, Button, ToastAndroid} from  'react-native';

export default class Page1 extends React.Component {
    showToast(){
        ToastAndroid.show("这是一个吐司", ToastAndroid.SHORT);
    }
    render() {
        const {navigate} = this.props.navigation;
        console.log(navigate);
        let name2 = null;
        try {
            name2 = this.props.navigation.state.params.name;
        } catch (e) {
        }
        return (

            <View style={{backgroundColor: '#FFF'}}>


                <Text>{name2}page 11111I am MySelf Page!!</Text>
                <Button
                    title="我要更新一下。ok"
                    onPress={() =>
                        navigate('Page2', {name: 'Jane'})
                    }
                />
                <Button
                    title="显示一个toast"
                    onPress={()=>this.showToast()}
                />
            </View>




        );
    }
}