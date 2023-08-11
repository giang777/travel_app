import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../ui/home";
import SearchScreen from "../ui/search";
import BookingScreen from "../ui/booking";
import ProfileScreen from "../ui/profile";
import Document from "../../assets/icons/document.svg";
import SelectedDocument from "../../assets/icons/selectDocument.svg";
import Search from "../../assets/icons/search.svg";
import Home from "../../assets/icons/home.svg";
import Profile from "../../assets/icons/profile.svg";
import ProfileTab from "../../assets/icons/profileTab.svg";
import SearchProfile from "../../assets/icons/searchProfile.svg";
import SelectProfile from "../../assets/icons/selectProfile.svg";

import { ColorAssets } from "../utils/app-assets";

const BottomBar = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <BottomBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: ColorAssets.greenColor,
        tabBarStyle: {},
      }}
    >
      <BottomBar.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <ProfileTab color={color} size={size} />
            ) : (
              <Home color={color} size={size} />
            ),
          headerShown: false,
        }}
      />

      <BottomBar.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={() => ({
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SearchProfile color={color} size={size} />
            ) : (
              <Search color={color} size={size} />
            ),
          headerShown: false,
        })}
      />

      <BottomBar.Screen
        component={BookingScreen}
        name="BookingScreen"
        options={({ route }) => ({
          tabBarLabel: "Booking",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SelectedDocument color={color} size={size} />
            ) : (
              <Document color={color} size={size} />
            ),
          headerShown: false,
        })}
      />

      <BottomBar.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SelectProfile color={color} size={size} />
            ) : (
              <Profile color={color} size={size} />
            ),
          headerShown: false,
        }}
      />
    </BottomBar.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
