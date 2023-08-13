import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../common/HeaderCustom';
import Banner from './Banner';
import Details from './Details';
import Maps from './Map';
import Bottom from './Bottom';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import AntdesignIcon from "react-native-vector-icons/AntDesign";

const HotelDetailsSCreen = (props) => {
  const { navigation } = props;
  const item = {
    name: "Royals President Hotel",
    address: "79 Place de la Madeleine Paris 75009 France",
    description: "The official officialThe official officialThe official officialThe official officialThe official officialThe official officialThe official officialThe official officialThe official officialThe official official",
    listDetails: [
      {
        name: "Hotel",
        image: "http://cdn.onlinewebfonts.com/svg/img_110805.png",
      },
      {
        name: "4 BedRoom",
        image: "https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png",
      },
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      },
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      }
    ],
    listFacilities: [
      {
        name: "Hotel",
        image: "http://cdn.onlinewebfonts.com/svg/img_110805.png",
      },
      {
        name: "4 BedRoom",
        image: "https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png",
      },
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      },
      ,
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      },
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      },
      {
        name: "2 Bath Rooms",
        image: "https://icon-library.com/images/picture-icon-png/picture-icon-png-5.jpg",
      },
    ],
    gallery: [
      "https://qtxasset.com/luxurytraveladvisor/1548868410/iraphsuialuxurycollectionhotelokinawajapanpoolrendering.jpg/iraphsuialuxurycollectionhotelokinawajapanpoolrendering.jpg?LENAYO0gnLSF7u8cfep.dZW.mU78u2lQ",
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/02/thumbs/1200x600/44180.jpg",
      "https://qtxasset.com/luxurytraveladvisor/1548868410/iraphsuialuxurycollectionhotelokinawajapanpoolrendering.jpg/iraphsuialuxurycollectionhotelokinawajapanpoolrendering.jpg?LENAYO0gnLSF7u8cfep.dZW.mU78u2lQ",
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/02/thumbs/1200x600/44180.jpg",
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/02/thumbs/1200x600/44180.jpg",
    ]
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Banner></Banner>
        <Details item={item} navigation={navigation}></Details>


        <View style={styles.flex}>
          <TouchableOpacity style={[styles.buttonMore, styles.flexCenter]} onPress={() => {
            navigation.navigate("HotelReviewScreen")
          }}>
            <Text style={[styles.more, { color: 'green' }]}>More</Text>
            <AntdesignIcon style={styles.left} name='down' size={30} color={'green'} />
          </TouchableOpacity>
        </View>
      </ScrollView >
      <HeaderCustom style={styles.Top} navigation={navigation}></HeaderCustom>
      <Bottom style={styles.Bottom} price={19}></Bottom>
    </View >
  )
}

export default HotelDetailsSCreen

