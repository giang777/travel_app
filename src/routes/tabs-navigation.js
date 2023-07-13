import React from 'react';
import SplashScreen from '../screens/splash/splash-screen';
import HomeScreen from '../screens/home/home-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginHomeScreen from '../screens/Auth/login-home-screen';
import WelcomeV1 from '../screens/splash/welcome-v1-screen';
import WelcomeV1_1 from '../screens/splash/welcome-v1-1-screen';
import LoginEmailScreen from '../screens/Auth/login-email-screen';
import SignUpScreen from '../screens/Auth/screen/sign-up-screen';
import ConfirmInformationScreen from '../screens/Auth/screen/confirm-information-screen';

const Stack = createNativeStackNavigator();

export default TabsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen}  />
      <Stack.Screen name="WelcomeV1" component={WelcomeV1} />
      <Stack.Screen name="WelcomeV1_1" component={WelcomeV1_1} />
      <Stack.Screen name="LoginHomeScreen" component={LoginHomeScreen}  options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="LoginEmailScreen" component={LoginEmailScreen} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="ConfirmInformationScreen" component={ConfirmInformationScreen} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

