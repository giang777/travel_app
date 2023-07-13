import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ColorAssets } from "../utils/app-assets";

const CustomTextInput = ({isPassword}) => {
  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input} placeholder="Enter text" />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius:20,
    flexDirection:'row',
  },
  input: {
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
  },
});

export default CustomTextInput;
