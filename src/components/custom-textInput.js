import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ColorAssets } from "../utils/app-assets";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you want to use FontAwesome icons

const CustomTextInput = ({ secureTextEntry, placeholder, onChangeText,iconName }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={21} color="#999" />
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType="ascii-capable"
      />
    </View>
  );
};

const CustomTextInput2 = ({ textPlaceHolder }) => {
  return (
    <View style={styles.container2}>
      <TextInput style={styles.input} placeholder={textPlaceHolder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 20,
    paddingStart: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
  },
  container2: {
    width: "49%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 20,
    flexDirection: "row",
  },
});

export { CustomTextInput, CustomTextInput2 };
