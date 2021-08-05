import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Style from './Style';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MemberShipLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            hidePass1:false,
            email:'',
            password:''
        }
    }
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.innerContainer}>
                    <Image source={require('../images/OBJECTS.png')} style={Style.objects} resizeMode='contain' />

                    <View style={Style.columnContainer}>
                        <Text style={Style.designText1}>Design Company</Text>
                        <Text style={Style.membership1}>YOUR MEMBERSHIP</Text>
                    </View>

                </View>
                <Text style={Style.passWordText}>PassWord</Text>
                <Text style={Style.textContainer2}>Please enter you password here for the membership above.</Text>
                <Text style={Style.textContainer3}>If this is your first time, you may have received a new password to log into this memberships app.</Text>
                <Text style={Style.textContainer3}>Once in,you can change your password in your profile</Text>

                <View style={Style.textInputView}>
                    <Image source={require('../images/envelope.png')} style={Style.envlope} resizeMode='contain' />
                    <TextInput
                        placeholder="Email ID"
                        style={Style.textInput}
                        keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    {/* <Image source={require('../images/right.png')} style={Style.right} resizeMode='contain' /> */}
                </View>
                <View style={Style.textPassWordView}>
                    <Image source={require('../images/lock.png')} style={Style.envlope} resizeMode='contain' />
                    <TextInput
                        placeholder="PassWord"
                        style={Style.textInput}
                        secureTextEntry={this.state.hidePass1 ? true : false} 
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })} />
                    <Icon
                        name={this.state.hidePass1 ? 'eye-slash' : 'eye'}
                        size={15}
                        color="grey"
                        onPress={() => this.setState({ hidePass1: !this.state.hidePass1 })}
                        style={Style.right}
                    />
                </View>

                <View style={Style.rowContainerView}>
                    <View style={Style.checkContainer}>
                        <Image source={require('../images/checkbox.png')} style={Style.envlope} resizeMode='contain' />

                        <Text style={Style.remember}>Remember me</Text>
                    </View>

                    <Text style={Style.forgetPass}>Forget PassWord?</Text>
                </View>

                <TouchableOpacity style={Style.loginContainer1} onPress={() => this.props.navigation.navigate('MemberShipDetails')}>
                    <Text style={Style.loginText}>Login</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
