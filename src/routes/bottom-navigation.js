import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SearchScreen from "../screens/search";
import BookingScreen from "../screens/booking";
import ProfileScreen from "../screens/profile";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const BottomBar = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#32CD32",
      }}
    >
      <BottomBar.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <BottomBar.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <BottomBar.Screen
        component={BookingScreen}
        name="BookingScreen"
        options={{
          tabBarLabel: "Booking",
          tabBarIcon: ({ color, size }) => (
            <Icon name="event-note" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <BottomBar.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </BottomBar.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
