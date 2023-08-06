import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ItemOngoing = ({ item }) => {
  return (
    <View>
      <View style={styles.boxItem}>
        <View>
          <View style={styles.boxTop}>
            <Image source={{ uri: item.uri }} style={styles.img} />
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.hotelName}>{item.name}</Text>
              <Text style={styles.hotelAddress}>{item.address}</Text>
              <Text style={styles.hotelStatus}>{item.status}</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.boxBottom}>
            <TouchableOpacity style={styles.btnCancel}>
              <Text style={styles.textCancel}>Cancel Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView}>
              <Text style={styles.textView}>View Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export { ItemOngoing }