import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { ColorAssets, ImageAssets } from "../../utils/app-assets";
import { useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";

const WelcomeV1 = ({ navigation }) => {
  const { width, height } = useSelector((state) => state);
  return (
    <TouchableWithoutFeedback
    
    onPress={() => navigation.dispatch(StackActions.replace("WelcomeV1_1"))
  }
    >
      <View style={styles.container}>
        <ImageBackground
          source={ImageAssets.backgroundImage}
          style={styles.imageBackground}
        >
          <View
            style={[styles.content, { width: width, height: height / 3.5 }]}
          >
            <Text style={[styles.title, { fontSize: width / 9 }]}>
              Welcome to 👋
            </Text>
            <Text style={[styles.subtitle, { fontSize: width / 5.5 }]}>
              Itinerary
            </Text>
            <Text style={[styles.description,{fontSize:width/20}]}>
              The best travel booking in this century to accompany your vacation
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
  },
  content: {
    justifyContent: "space-around",
    paddingBottom: 20,
    paddingHorizontal: "5%",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
    color: ColorAssets.greenColor,
    fontSize: 66,
    letterSpacing: 1,
  },
  description: {
    color: ColorAssets.whiteColor,
    fontWeight: 400,
  },
});

export default WelcomeV1;
