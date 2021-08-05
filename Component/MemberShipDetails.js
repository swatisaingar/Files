import React from 'react';

import {View,Text,Image,TouchableOpacity} from 'react-native';
import Style from './Style';

export default class MemberShipDetails extends React.Component{

    render(){
        return(
            <View style={Style.container}>
                 <View style={Style.innerContainer}>
                 <Image source={require('../images/OBJECTS.png')} style={Style.objectsimg} resizeMode='contain' />
  
                   <View style={Style.columnContainer}>
                       <Text style={Style.designText1}>Design Company</Text>
                       <Text style={Style.membership}>YOUR MEMBERSHIP</Text>
                   </View>

               </View>
               <Text style={Style.passWordText}>Welcome to</Text>
               <Text style={Style.textContainer}>Design Company MemberShip</Text>
               <Text style={Style.textContainer2}>Hope you will be a part of a community learning all about Residential Design and we will help and support you with courses,groups,and events that will make you a more confident home owner.</Text>
               <TouchableOpacity style={Style.loginContainer1} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={Style.loginText}>Enter</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
