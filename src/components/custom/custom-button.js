import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ColorAssets } from "../../utils/app-assets";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonNext}
      onPress={onPress}
    >
      <Text style={styles.titleNext}>{title}</Text>
    </TouchableOpacity>
  )
}
const CustomHideButton = ({ title }) => {
  return (
    <TouchableOpacity
      style={styles.buttonHide}
      onPress={()=>{}}
      disabled={true}
    >
      <Text style={styles.titleNext}>{title}</Text>
    </TouchableOpacity>
  )
}

export  {CustomButton, CustomHideButton}

const styles = StyleSheet.create({
  buttonNext: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 40,
    backgroundColor: ColorAssets.greenColor,
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#69F0AE"
  },
  buttonHide: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 40,
    backgroundColor: '#53A777',
    alignItems: "center",
    opacity: 0.9
  },
  titleNext: {
    fontWeight: "bold",
    color: ColorAssets.whiteColor,
    fontSize: 16,
  },
})