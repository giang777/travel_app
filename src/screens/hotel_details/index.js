import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderCustom from '../../components/HeaderCustom';
import Banner from './Banner';
import Details from './Details';

const HotelDetailsSCreen = () => {
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
    ]
  }
  return (
    <ScrollView>
      <Banner></Banner>
      <HeaderCustom></HeaderCustom>
      <Details item={item}></Details>
    </ScrollView>
  )
}

export default HotelDetailsSCreen

