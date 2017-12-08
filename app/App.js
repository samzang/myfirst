/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import BaseComponent from './base/BaseComponent';
import MainNav from './navigaters/mainNav';
import { addNavigationHelpers } from "react-navigation";

export default class App extends BaseComponent{
    render(){
        return(
            <MainNav
                navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}/>
        )
    }
}
