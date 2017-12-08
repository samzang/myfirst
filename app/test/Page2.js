/**
 * Created by zhangshexin on 2017/11/7.
 */
import React from 'react';
import { View, Text,Button } from  'react-native';

export default class Page2 extends React.Component{


    static  navigationOptions = ({navigation}) => {
        // headerRight:<Button title="更多" onPress={navigation.goBack}/>

        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {name} = state.params;
        console.log (name);
        return {
            title: isInfo ? `${name}'s Contact Info` : `Chat with ${ state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${name}'s info`}
                    onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
                />
            ),
        };


    }

    render(){
        const { navigate } = this.props.navigation;
        console.log(this.props)
        let name2=null ;
        try {
            name2 = this.props.navigation.state.params.name;
        } catch (e) {
        }
        return(

                <View style={{backgroundColor:'#FFF'}}>
                    <Text>{name2}I am MySelf Page!!</Text>
                    <Button
                        title="Go to Jane's profile"
                        onPress={()=>
                        {
                            navigate('TablePage', { name: '456ieieue' });
                        }
                        }
                    />
                </View>

        );
    }
}