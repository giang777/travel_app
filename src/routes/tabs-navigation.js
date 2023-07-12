import React from 'react';
import SplashScreen from '../screens/splash/splash-screen';
import HomeScreen from '../screens/home/home-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeV1 from '../screens/splash/welcome-v1';
import WelcomeV1_1 from '../screens/splash/welcome-v1-1';
import LoginHomeScreen from '../screens/Auth/login-home-screen';

const Stack = createNativeStackNavigator();

export default TabsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen}  />
      <Stack.Screen name="WelcomeV1" component={welcomeV1} />
      <Stack.Screen name="WelcomeV1_1" component={WelcomeV1_1} />
      <Stack.Screen name="LoginHomeScreen" component={LoginHomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

