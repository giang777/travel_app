import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ColorAssets } from '../utils/app-assets'

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

export default CustomButton

const styles = StyleSheet.create({
  buttonNext: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 40,
    backgroundColor: ColorAssets.greenColor,
    alignItems: "center",
  },
  titleNext: {
    fontWeight: "bold",
    color: ColorAssets.whiteColor,
    fontSize: 16,
  },
})