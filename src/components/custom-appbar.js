import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sizebox from "./custom-sizebox";
import React from "react";
import { ColorAssets } from "../utils/app-assets";
const AppBar = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons name="arrow-back" size={38} />
      </TouchableOpacity>
      <Sizebox width={10} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightButton} />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    height: 46,
    backgroundColor: ColorAssets.whiteColor,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    elevation: 0.2,
  },
  
  title: {
    alignItems:'center',
    fontSize: 24,
    paddingVertical:2,
    fontWeight: "bold",
  },
  rightButton: {
    width: 40,
  },
});
