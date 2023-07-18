import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { ColorAssets } from "../utils/app-assets";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomTextInput = ({ secureTextEntry, placeholder, onChangeText, iconName, valueText, showHide }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [statusPass, setStatusPass] = useState(true)
  return (
    <View style={[styles.container, isFocused ? styles.boxInputFocus : styles.boxInput]}>
      {iconName ? <View style={{ width: 25, alignItems: 'center' }}>
        <Icon name={iconName} size={21} color={isFocused ? ColorAssets.greenColor : (valueText ? '#000' : '#999')} />
      </View> : <View></View>}
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry ? statusPass : false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType="ascii-capable"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {showHide ? <TouchableOpacity onPress={() => { setStatusPass(!statusPass) }} style={{ alignItems: 'center', width: 25 }}>
        {statusPass ? <Icon name="eye-slash" size={21} color={isFocused ? ColorAssets.greenColor : (valueText ? '#000' : '#999')} /> : <Icon name="eye" size={21} color={isFocused ? ColorAssets.greenColor : (valueText ? '#000' : '#999')} />}
      </TouchableOpacity> : <View></View>}

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
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "85%",
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
  boxInput: {
    backgroundColor: ColorAssets.greyColor200,
  },
  boxInputFocus: {
    backgroundColor: '#EDFAF2',
    borderWidth: 2,
    borderColor: ColorAssets.greenColor,
  }
});

export { CustomTextInput, CustomTextInput2 };
