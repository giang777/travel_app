import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { arrOptions, arrFakeData } from './fakeData';
import { ColorAssets, IconAssets, ImageAssets } from '../../utils/app-assets';
import { ItemOngoing } from '../../components/renderItemBooking/index'
const BookingScreen = () => {
  const [indexOptions, setindexOptions] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameApp}>My Booking</Text>
          </View>
          <View style={styles.viewHeaderItem}>
            <TouchableOpacity>
              <Icon name='search' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Options*/}
        <View style={styles.viewOptions}>
          {
            arrOptions.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                  onPress={() => { setindexOptions(item.id) }}
                  key={index}
                >
                  <Text style={[{ fontWeight: 'bold', fontSize: 16 }, indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/*Body*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          arrFakeData.map((item, index) => {
            return (
              <ItemOngoing key={index} item={item} />
            )
          })
        }
      </ScrollView>


    </SafeAreaView>
  )
}

export default BookingScreen

