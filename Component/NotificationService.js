import {AsyncStorage} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async() => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('dhsgfdjhfv',fcmToken);
    if(!fcmToken){
        try{
            const fcmToken = await messaging().getToken();
            if(fcmToken){
                console.log('new generated tokn',fcmToken);
                await AsyncStorage.setItem('fcmToken',fcmToken)
            }
        }
        catch(error){
            console.log('errorrr isss',error);
        }
    }
}

export const notificationListener = async() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',remoteMessage.notification);
      });

      messaging().onMessage(async remoteMessage =>{
          console.log('received in foreground',remoteMessage)
      })
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:',remoteMessage.notification);
        }
    })
}