import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { styleWelcomeV1 } from "./styles";
import { ImageAssets } from "../../utils/app-assets";
import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";
const WelcomeV1 = ({ navigation }) => {
  const welcomeFirst = async () => {
     SharedPreferences.SET_NEW_USER("true");

    changeScreenWithOutTime(navigation, "WelcomeV1_1");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        welcomeFirst();
      }}
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

export default WelcomeV1;
