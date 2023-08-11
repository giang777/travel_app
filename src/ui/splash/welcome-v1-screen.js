import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { styleWelcomeV1 } from "./styles";
import { ImageAssets, useCustomFonts } from "../../utils/app-assets";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
const WelcomeV1 = ({ navigation }) => {
  const welcomeFirt = () => {
    AsyncStorage.setItem('NEW_USER', 'true')
    navigation.dispatch(StackActions.replace("WelcomeV1_1"))
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => { welcomeFirt() }}
    >
      <View style={styleWelcomeV1.container}>
        <ImageBackground
          source={ImageAssets.backgroundImage}
          style={styleWelcomeV1.imageBackground}
        >
          <View style={styleWelcomeV1.content}>
            <Text style={styleWelcomeV1.title}>Welcome to 👋</Text>
            <Text style={styleWelcomeV1.subtitle}>Itinerary</Text>
            <Text style={styleWelcomeV1.description}>
              The best travel booking in this century to accompany your vacation
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WelcomeV1