/**
 * Created by zhangshexin on 2017/11/20.
 */
import React from 'react';
import { Provider,connect } from 'react-redux';
import configureStore from './store/storeConfig';
import App from './App';
import MainNav from './navigaters/mainNav';

const navReducer = (state, action) => {
    const newState = MainNav.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);
const store = configureStore(undefined,navReducer);

const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);
export default Root;

