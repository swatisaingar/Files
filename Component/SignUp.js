import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Style from './Style';
import { ScrollView } from 'react-native-gesture-handler';
import ApiService from '../api/ApiService';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            fName: '',
            lName: '',
            mobile: 0,
            email: '',
            password: '',
            hidePass1:false
        }
    }

    onSubmit = () => {
        const bodyData = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            email: this.state.email,
            phoneNumber: this.state.mobile,
            password: this.state.password
        }
        fetch(ApiService.BASE_URL + 'user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        })

            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    this.props.navigation.navigate('MemberShip')
                }
            }).catch((err) => console.log('erdhgbdkfjbzf', err))
            .done();
    }

    signIn = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            } else if (error.code === statusCodes.IN_PROGRESS) {
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            } else {
            }
        }
    };

    async appleLogin() {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
    }

    render() {
        return (
            <ScrollView style={Style.container}>
                <Image source={require('../images/member.png')} style={Style.imageView} resizeMode='contain' />
                <Text style={Style.normalText}>Welcome</Text>
                <Text style={Style.textContainer}>Hello there,sign in to continue!</Text>
                <View style={Style.textInputView2}>
                    <TextInput
                        placeholder="First Name"
                        style={Style.textInput}
                        value={this.state.fName}
                        onChangeText={(text) => this.setState({ fName: text })}
                    />
                </View>
                <View style={Style.textInputView2}>
                    <TextInput
                        placeholder="Last Name"
                        style={Style.textInput}
                        value={this.state.lName}
                        onChangeText={(text) => this.setState({ lName: text })}
                    />
                </View>
                <View style={Style.textInputView2}>
                    <TextInput
                        placeholder="Mobile Number"
                        style={Style.textInput}
                        keyboardType='email-address'
                        value={this.state.mobile}
                        onChangeText={(text) => this.setState({ mobile: text })}
                    />
                </View>
                <View style={Style.textInputView2}>
                    <Image source={require('../images/envelope.png')} style={Style.envlope} resizeMode='contain' />
                    <TextInput
                        placeholder="Email ID"
                        style={Style.textInput}
                        keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={Style.textPassWordView}>
                    <Image source={require('../images/lock.png')} style={Style.envlope} resizeMode='contain' />
                    <TextInput
                        placeholder="PassWord"
                        style={Style.textInput}
                        secureTextEntry={this.state.hidePass1 ? true : false}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })} />
                    {/* <Image source={require('../images/eye.png')} style={Style.right} resizeMode='contain' /> */}
                    <Icon
                        name={this.state.hidePass1 ? 'eye-slash' : 'eye'}
                        size={15}
                        color="grey"
                        onPress={() => this.setState({ hidePass1: !this.state.hidePass1 })}
                        style={Style.right}
                    />
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={Style.accountContainer}>I have an account? Login </Text>
                </TouchableOpacity>

                <View style={[Style.rowContainer, { marginTop: 20 }]}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.signIn()}>
                        <Image source={require('../images/google.png')} style={Style.google} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.signIn()}>
                        <Image source={require('../images/facebook.png')} style={Style.google} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.appleLogin()}>
                        <Image source={require('../images/apple.png')} style={Style.google} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

}
