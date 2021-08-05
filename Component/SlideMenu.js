import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

export default class SlideMenu extends React.Component {
    render() {
        const { theme, user } = this.props;
        return (
            <View>
                <View style={{flexDirection:'row',marginTop:30}}>
                <Image source={require('../images/profile.png')} style={{ width: 40, height: 40,}} resizeMode='contain' />
                <View style={{flexDirection:'column'}}>
                <Text style={{marginLeft:30,color:'white',fontSize:17}}>Design Company</Text>
                <Text style={{marginLeft:30,color:'white',fontSize:12,}}>your membership</Text>
                </View>
                </View>
                <DrawerNavigatorItems {...this.props} />
            </View>
        )
    }
}