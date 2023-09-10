import { StyleSheet, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
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
import i18n from "../l10n/i18n";
const BottomBar = createBottomTabNavigator();
const BottomNavigation = () => {
  const scrollAnimationBottom = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollAnimationBottom, 0, 100);
  const statusBottom = (value) => {
    scrollAnimationBottom.setValue(value);
  };
  const translateMyY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
  });
  return (
    <BottomBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: ColorAssets.greenColor,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: "white",
        },
      }}
      tabBar={(props) => (
        <Animated.View style={{ transform: [{ translateY: translateMyY }] }}>
          <BottomTabBar {...props} />
        </Animated.View>
      )}
    >
      <BottomBar.Screen
        // component={HomeScreen}
        name="HomeScreen"
        options={{
          tabBarLabel: i18n.t("navbar.home"),
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <ProfileTab color={color} size={size} />
            ) : (
              <Home color={color} size={size} />
            ),
          headerShown: false,
        }}
      >
        {() => <HomeScreen statusBottom={statusBottom} />}
      </BottomBar.Screen>

      <BottomBar.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={() => ({
          tabBarLabel: i18n.t("navbar.search"),
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
          tabBarLabel: i18n.t("navbar.booking"),
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
          tabBarLabel: i18n.t("navbar.profile"),
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
