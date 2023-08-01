import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  //giang
  console.log('HOME');
  const token = useSelector((state) => state.tokenReducer.token)
  console.log(token);

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

