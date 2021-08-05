import React from 'react';

import { View, Text, StyleSheet, StatusBar,Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class SplashScreen1 extends React.Component {

    componentDidMount() {
        SplashScreen.hide();
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <Image source={require('../images/member.png')} style={styles.image} resizeMode='contain'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FD0D5',
        justifyContent:'center'
    },
    image: {
        flex: 1,
        alignSelf:'center'
    }
});
