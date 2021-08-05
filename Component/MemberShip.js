import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Style from './Style';
import CheckBox from '@react-native-community/checkbox';


export default class MemberShip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            isSelected: false,
            isSelected1: false
        }
    }
    render() {
        return (
            <View style={Style.container}>
                <Image source={require('../images/member.png')} style={Style.imageView} resizeMode='contain' />

                <Text style={Style.normalText}>Your Memberships</Text>
                <Text style={Style.textContainer1}>Your email is registered with multiple memberships on MemberApp. Please select which MemberShip you wish to log into today</Text>
                <View style={Style.selection1}>
                    {/* <Image source={require('../images/checkbox.png')} style={Style.envlope} resizeMode='contain' /> */}
                    <CheckBox
                        value={this.state.isSelected}
                        onValueChange={() => this.setState({ isSelected: !this.state.isSelected })}
                        style={Style.envlope}
                    />
                    <Image source={require('../images/OBJECTS.png')} style={Style.objects} resizeMode='contain' />

                    <View style={Style.columnContainer}>
                        <Text style={Style.designText}>Design Company</Text>
                        <Text style={Style.membership}>YOUR MEMBERSHIP</Text>
                    </View>

                </View>

                <View style={Style.selection2}>
                    {/* <Image source={require('../images/checkbox.png')} style={Style.envlope} resizeMode='contain' /> */}
                    <CheckBox
                        value={this.state.isSelected1}
                        onValueChange={() => this.setState({ isSelected1: !this.state.isSelected1 })}
                        style={Style.envlope}
                    />
                    <Image source={require('../images/OBJECTS.png')} style={Style.objects} resizeMode='contain' />

                    <View style={Style.columnContainer}>
                        <Text style={Style.designText}>Homelife Company</Text>
                        <Text style={Style.membership}>YOUR MEMBERSHIP</Text>
                    </View>

                </View>

                <TouchableOpacity style={Style.loginContainer} onPress={() => this.props.navigation.navigate('MemberShipLogin')}>
                    <Text style={Style.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
