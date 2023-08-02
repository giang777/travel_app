import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import { ColorAssets, IconAssets, ImageAssets } from '../../utils/app-assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { arrOptions, arrFakeData } from './fakeData';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RenderItemListHorizontal,RenderItemListVertical } from '../../components/renderList';

const HomeScreen = (props) => {
  //giang giang 

  const [indexOptions, setindexOptions] = useState(1);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameApp}>Travel App</Text>
          </View>
          <View style={styles.viewHeaderItem}>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Icon name='notifications-none' size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='apps' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Search Bar*/}
        <View style={styles.searchBar}>
          <Text style={styles.textWelcome}>Hello, Giang 👋</Text>
          <View style={styles.viewSearch}>
            <Icon name="search" color={'gray'} size={20} />
            <TextInput placeholder='Search' maxLength={225} numberOfLines={1} style={{ width: "100%" }} />
          </View>
        </View>

        {/*Options*/}
        <ScrollView horizontal={true} style={styles.viewOptions} showsHorizontalScrollIndicator={false}>
          {
            arrOptions.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                  onPress={() => { setindexOptions(item.id) }}
                  key={index}
                >
                  <Text style={[{fontWeight: 'bold', fontSize: 16},indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

        {/*Contents*/}
        <ScrollView horizontal={true} style={styles.viewOptions} showsHorizontalScrollIndicator={false}>
          {
            arrFakeData.map((item, index) => {
              return (
                <RenderItemListHorizontal key={index} item={item} />
              )
            })
          }
        </ScrollView>

        {/*Booked*/}
        <View style={styles.headerBooked}>
          <Text style={styles.nameApp}>Recently Booked</Text>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("RecentlyBookedScreen")}}>
            <Text style={[styles.nameApp, { color: "#32CD32" }]}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {
            arrFakeData.map((item, index) => {
              return (
                <RenderItemListVertical key={index} item={item}/>
              )
            })
          }
        </ScrollView>

      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

