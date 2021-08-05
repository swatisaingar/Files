import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Style from './Style';
import { Checkbox } from 'react-native-paper';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import ApiService from '../api/ApiService';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {requestUserPermission,notificationListener} from './NotificationService';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            email: '',
            password: '',
            hidePass1:false
        }
    }

    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '89509112246-jf7qstk10saffua5bud8se1j9h3irobl.apps.googleusercontent.com',// my clientID
            offlineAccess: true,
            iosClientId: '89509112246-k8ijim20bfmubd3109fbq5cmkh47umv0.apps.googleusercontent.com'
        });

        requestUserPermission();
        notificationListener();
    }

    onSubmit = () => {
        const bodyData = {
            email: this.state.email,
            password: this.state.password
        }
        fetch(ApiService.BASE_URL + 'user/login', {
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
                    AsyncStorage.setItem('access_token', responseData.token);
                    this.props.navigation.navigate('MemberShip');
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


    // facebookLogin = async () => {
    //     try {
    //       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    //       if (result.isCancelled) {
    //         throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    //       }
    //       console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
    //       // get the access token
    //       const data = await AccessToken.getCurrentAccessToken();

    //       if (!data) {
    //         throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    //       }
    //       console.log('after login access token' + data.accessToken.toString());
    //       // create a new firebase credential with the token
    //       var accessToken = data.accessToken.toString();
    //       // this.initUser(accessToken)
    //       const infoRequest = new GraphRequest(
    //         '/me?fields=name,email,picture',
    //         null,
    //         this._responseInfoCallback
    //       );
    //       // Start the graph request.
    //       new GraphRequestManager().addRequest(infoRequest).start();
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }

    render() {
        return (
            <View style={Style.container}>
                <Image source={require('../images/member.png')} style={Style.imageView} resizeMode='contain' />
                <Text style={Style.normalText}>Welcome</Text>
                <Text style={Style.textContainer}>Hello there,sign in to continue!</Text>
                <View style={Style.textInputView}>
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

                <View style={Style.rowContainerView}>
                    <View style={Style.checkContainer}>
                        <Image source={require('../images/checkbox.png')} style={Style.envlope} resizeMode='contain' />

                        <Text style={Style.remember}>Remember me</Text>
                    </View>

                    <Text style={Style.forgetPass}>Forget PassWord?</Text>
                </View>

                <TouchableOpacity style={Style.loginContainer} onPress={() => this.onSubmit()}>
                    <Text style={Style.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={Style.accountContainer}>Don't have an account? Join us </Text>
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
            </View>
        )
    }

}
