
import React from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen1 from '../Component/SplashScreen1';
import Aboutus from '../Component/Aboutus';
import MyTabs from './BottomTab';
import Message from '../Component/Message';
import Profile from '../Component/Profile';
import Calendar from '../Component/Calendar';
import SlideMenu from '../Component/SlideMenu';
import Login from '../Component/Login';
import MemberShip from '../Component/MemberShip';
import MemberShipLogin from '../Component/MemberShipLogin';
import MemberShipDetails from '../Component/MemberShipDetails';
import SignUp from '../Component/SignUp';

const StackNavigator = () => {
  const prefix = 'demo://'
    return <AppContainer uriPrefix={prefix}/>;
  
}

const StackApp = createStackNavigator({
  SplashScreen:{
    screen:SplashScreen1
  },
  Home:{
    screen: MyTabs,
    path:'MyTabs'
  },
  Aboutus:{
      screen:Aboutus,
      path:'Aboutus/:userId'
  },
  Message:{
      screen:Message,
      path:'Message/:userId'
  },
  Profile:{
      screen:Profile,
      path:'Profile/:userId'
  },
  Calendar:{
      screen:Calendar,
      path:'Calendar/:userId'
  },
  SlideMenu:{
      screen:SlideMenu
  },
  Login:{
    screen:Login,
    path:'Login/:userId'
  },
  MemberShip:{
    screen:MemberShip,
    path:'MemberShip/:userId'
  },
  MemberShipLogin:{
    screen:MemberShipLogin,
    path:'MemberShipLogin/:userId'
  },
  MemberShipDetails:{
    screen:MemberShipDetails,
    path:'membershipdetails/:userId'
  },
  SignUp:{
    screen:SignUp,
    path:'SignUp/:userId'
  }
},{
  headerMode:'none'
});

const AppContainer = createAppContainer(StackApp);

export default StackNavigator;