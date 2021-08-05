import React from 'react';

import { Text, View ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MyDrawer from './Drawer';
// import Home from '../Component/Home';
import Aboutus from '../Component/Aboutus';
import Message from '../Component/Message';
import Profile from '../Component/Profile';
import Calendar from '../Component/Calendar';

const MyTabs = createAppContainer(createBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Message',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/user.png')} style={{ width: 30, height: 30, alignSelf: 'center',}} resizeMode='contain' />
            ),
        }
    },
    Aboutus: {
        screen: Aboutus,
        navigationOptions: {
            tabBarLabel: 'Aboutus',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/document.png')} style={{ width: 30, height: 30, alignSelf: 'center',}} resizeMode='contain' />
            ),
        }
    },
    Home: {
        screen: MyDrawer,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View style={{width:80,height:80,borderRadius:50,marginBottom:40,justifyContent:'center'}}>
                <Image source={require('../images/home.png')} style={{ width: 71, height: 71, alignSelf: 'center'}} resizeMode='contain' />
                </View>
            ),
        }
    },

    Message: {
        screen: Message,
        navigationOptions: {
            tabBarLabel: 'Message',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/comment.png')} style={{ width: 30, height: 30, alignSelf: 'center',}} resizeMode='contain' />
            ),
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            tabBarLabel: 'Message',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/calendar.png')} style={{ width: 30, height: 30, alignSelf: 'center',}} resizeMode='contain' />
            ),
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: 'black'
        }
    },
}));

export default MyTabs;