import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ColorAssets } from "../../utils/app-assets";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from 'react-native-date-picker'
const CustomTextInput = ({
  onTouchStart,
  errorText,
  isHaveTitle,
  title,
  secureTextEntry,
  placeholder,
  editable,
  onChangeText,
  iconName,
  fillText,
  showHide,
  valueText,
  condition
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [statusPass, setStatusPass] = useState(true);
  const [checkValidate, setCheckValidate] = useState(false);
  
  const checkEmty = () => {
    if (!fillText || (!condition && condition != undefined)) {
      setCheckValidate(true);
    } else {
      setCheckValidate(false);
    }
  };
  return (
    //on touch start để chọn tỉnh, thàn phố, thằng nào onTouchStart xoá cắt chim
    <View style={{ marginVertical: 15, width: "100%" }} onTouchStart={onTouchStart}>
      {isHaveTitle ? <Text style={styles.title}>{title}</Text> : <View></View>}

      <View
        style={[
          styles.container,
          isFocused
            ? styles.boxInputFocus
            : checkValidate
            ? styles.boxInputBlur
            : styles.boxInput,
        ]}
      >
        {iconName ? (
          <View style={{ width: 25, alignItems: "center" }}>
            <Icon
              name={iconName}
              size={21}
              color={
                isFocused ? ColorAssets.greenColor : fillText ? "#000" : "#999"
              }
            />
          </View>
        ) : (
          <View></View>
        )}
        <TextInput
        editable={editable}
          style={styles.input}
          value={valueText}
          secureTextEntry={secureTextEntry ? statusPass : false}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType="ascii-capable"
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            checkEmty();
            setIsFocused(false);
          }}
        />
        {showHide ? (
          <TouchableOpacity
            onPress={() => {
              setStatusPass(!statusPass);
            }}
            style={{ alignItems: "center", width: 25 }}
          >
            {statusPass ? (
              <Icon
                name="eye-slash"
                size={21}
                color={
                  isFocused
                    ? ColorAssets.greenColor
                    : valueText
                    ? "#000"
                    : "#999"
                }
              />
            ) : (
              <Icon
                name="eye"
                size={21}
                color={
                  isFocused
                    ? ColorAssets.greenColor
                    : valueText
                    ? "#000"
                    : "#999"
                }
              />
            )}
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      {checkValidate && !isFocused ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const CustomTextInput2 = ({
  title,
  keyboardType,
  valueText,
  editable,
  textPlaceHolder,
  isHaveHandle,
  onChangeText,
  onPress,
  isSelect
}) => {
  const [isFocused2, setIsFocused2] = useState(false);
  
  return (
    <View style={{width:"45%"}}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={[styles.container2,isFocused2 ? null : isSelect ? valueText ? styles.boxInput : styles.boxInputBlur : null]} onPress={onPress}>
        <TextInput
          editable={editable}
          style={[styles.input,{paddingHorizontal:10}]}
          value={valueText}
          keyboardType={keyboardType}
          placeholder={textPlaceHolder}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused2(true)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
   paddingStart:20,
   fontSize:12,
   color:'#FF5722',
   fontWeight:'bold'
  },
  showError: {},
  container: {
    width: "100%",
    zIndex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
  input: {
    width:"85%",
    borderRadius: 5,
    paddingVertical: 16,
    fontSize: 16,
    color:ColorAssets.blackolor
  },
  container2: {
    marginVertical: 8,
    width: "100%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 17,
    width: "100%",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 8,
  },
  boxInput: {
    backgroundColor: ColorAssets.greyColor200,
  },
  boxInputFocus: {
    backgroundColor: "#EDFAF2",
    borderWidth: 2,
    borderColor: ColorAssets.greenColor,
  },
  boxInputBlur: {
    backgroundColor: "#FFCCBC",
    borderWidth: 2,
    borderColor: "#FF5722",
  },
});

export { CustomTextInput, CustomTextInput2 };
