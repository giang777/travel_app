import React from 'react';
import SplashScreen from '../screens/splash/splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginHomeScreen from '../screens/Auth/login-home-screen';
import WelcomeV1 from '../screens/splash/welcome-v1-screen';
import WelcomeV1_1 from '../screens/splash/welcome-v1-1-screen';
import LoginEmailScreen from '../screens/Auth/login-email-screen';
import SignUpScreen from '../screens/Auth/screen/sign-up-screen';
import ForgotPassword from '../screens/Auth/screen/forgot-password'
import ForgotPasswordInputCode from '../screens/Auth/screen/forgot-password-inputcode'
import ConfirmInformationScreen from '../screens/Auth/screen/confirm-information-screen';
import CreateNewPassword from '../screens/Auth/screen/create-new-password'
import BottomNavigation from './bottom-navigation';
import HotelDetailsSCreen from '../screens/hotel_details';
import BookingScreen from '../screens/booking';

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
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="ForgotPasswordInputCode" component={ForgotPasswordInputCode} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="ConfirmInformationScreen" component={ConfirmInformationScreen} options={{animation:'slide_from_right'}} />
      <Stack.Screen name="MainScreen" component={BottomNavigation} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="HotelDetailsScreen" component={HotelDetailsSCreen} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="BookingScreen" component={BookingScreen} options={{animation:'slide_from_right'}}/>
    </Stack.Navigator>
  );
};

