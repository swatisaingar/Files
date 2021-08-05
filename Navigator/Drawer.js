import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../Component/Home';
import { Text, View ,Image} from 'react-native';
import SlideMenu from '../Component/SlideMenu';
import Profile from '../Component/Profile';
import Aboutus from '../Component/Aboutus';
import Calendar from '../Component/Calendar';
import Message from '../Component/Message';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const MyDrawer = createAppContainer(createDrawerNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            drawerLabel:'Home',
            drawerIcon: ({ tintColor }) => (
              <Image source={require('../images/home.png')} style={{ width: 30, height: 30, alignSelf: 'center'}} resizeMode='contain' />
              ),            
        }
    },
    Profile:{
      screen:Profile,
      navigationOptions:{
          drawerLabel:'Profile',
          drawerIcon: ({ tintColor }) => (
            <Image source={require('../images/user.png')} style={{ width: 30, height: 30, alignSelf: 'center'}} resizeMode='contain' />
            ),            
      }
  },
  Aboutus:{
    screen:Aboutus,
    navigationOptions:{
        drawerLabel:'Content',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('../images/document.png')} style={{ width: 30, height: 30, alignSelf: 'center'}} resizeMode='contain' />
          ),            
    },
    
},
Calendar:{
  screen:Calendar,
  navigationOptions:{
      drawerLabel:'Events',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('../images/calendar.png')} style={{ width: 30, height: 30, alignSelf: 'center'}} resizeMode='contain' />
        ),            
  },
  
},

Message:{
  screen:Message,
  navigationOptions:{
      drawerLabel:'Social Wall',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('../images/comment.png')} style={{ width: 30, height: 30, alignSelf: 'center'}} resizeMode='contain' />
        ),            
  },
  
}
},{
  contentComponent : SlideMenu,
  drawerBackgroundColor:'#3F53A5',
  defaultNavigationOptions:{

    marginTop:15
  }
}
));

export default MyDrawer;