import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from "react";
import { ColorAssets } from "../utils/app-assets";
const AppBar = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons name="arrow-back" size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightButton} />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: ColorAssets.whiteColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 0.2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightButton: {
    width: 40,
  },
});
