/**
 * Created by zhangshexin on 2017/11/17.
 */
import React from  'react';
import {View, Button} from 'react-native';


export  default class TablePage extends React.Component {
    // static  navigationOptions = ({navigation}) => {
    //     // headerRight:<Button title="更多" onPress={navigation.goBack}/>
    //
    //     const {state, setParams} = navigation;
    //     const isInfo = state.params.mode === 'info';
    //     const {user} = state.params;
    //     return {
    //         title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    //         headerRight: (
    //             <Button
    //                 title={isInfo ? 'Done' : `${user}'s info`}
    //                 onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
    //             />
    //         ),
    //     };
    //
    //
    // }


    render() {

        const {navigate} = this.props.navigation;

        return ( <View>
            <Button
                title="跳到tablenagivoter"
                onPress={() => {
                    navigate('TableRouter',{ user:  'Lucy' });
                }
                }
            />
        </View>);
    }
}