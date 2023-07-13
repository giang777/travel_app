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
const WelcomeV1 = ({ navigation }) => {
  
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.dispatch(StackActions.replace("WelcomeV1_1"))}
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