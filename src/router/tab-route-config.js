import React from 'react';
import SplashScreen from '../ui/splash/splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginHomeScreen from '../ui/auth/login-home-screen';
import WelcomeV1 from '../ui/splash/welcome-v1-screen';
import WelcomeV1_1 from '../ui/splash/welcome-v1-1-screen';
import LoginEmailScreen from '../ui/auth/login-email-screen';
import SignUpScreen from '../ui/auth/screen/sign-up-screen';
import ForgotPassword from '../ui/auth/screen/forgot-password'
import ForgotPasswordInputCode from '../ui/auth/screen/forgot-password-inputcode'
import ConfirmInformationScreen from '../ui/auth/screen/confirm-information-screen';
import CreateNewPassword from '../ui/auth/screen/create-new-password'
import BottomNavigation from './bottom-route-config';
import HotelDetailsSCreen from '../ui/hotel_details';
import BookingScreen from '../ui/booking';
import Booked from '../ui/home/components/Booked';
import HotelPhotoScreen from '../ui/hotel_details/Screen/HotelPhoTos';
import HotelLocationScreen from '../ui/hotel_details/Screen/HotelLocation';
import HotelReviewScreen from '../ui/hotel_details/Screen/HotelReview';
import PayScreen from '../ui/booking/payScreen';
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
      <Stack.Screen name="RecentlyBookedScreen" component={Booked} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="HotelPhotoScreen" component={HotelPhotoScreen} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="HotelLocationScreen" component={HotelLocationScreen} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="HotelReviewScreen" component={HotelReviewScreen} options={{animation:'slide_from_right'}}/>
      <Stack.Screen name="PayScreen" component={PayScreen} options={{animation:'slide_from_right'}}/>

    </Stack.Navigator>
  );
};

