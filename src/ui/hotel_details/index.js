import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from "react";
import HeaderCustom from '../../common/HeaderCustom';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import Swiper from "react-native-swiper/src";

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

  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "http://www.kidstart.co.uk/blog/wp-content/uploads/2014/05/TRAVELODGE_BENEFITING_FROM_BRAND_INVESTMENT-2.jpg",
      "https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_960_720.jpg",
      "https://i.ibb.co/FKr0SCV/Hotel-Packages-139.jpg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/*Banner */}
        <View style={styles.banner_container}>
          <View style={styles.banner_swiper}>
            <Swiper
              showButtons={false}
              showsPagination={false}
            >
              {bannerData.map((item) => {
                return (
                  <Image
                    key={item}
                    style={styles.banner_imageBanner}
                    resizeMode="contain"
                    source={{ uri: item }}
                  />
                );
              })}
            </Swiper>
            <View style={{ height: 30 }}></View>
          </View>
        </View>

        {/* <Details item={item} navigation={navigation}></Details> */}


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

      {/*Bottom */}
      <View style={[styles.bottom_flex, styles.bottom_align, styles.bottom_border]}>
        <View style={[styles.bottom_flex, styles.bottom_align]}>
          <Text style={styles.bottom_price}>${28}</Text>
          <Text style={styles.bottom_normal}>/night</Text>
        </View>
        <TouchableOpacity style={styles.bottom_button} onPress={() => {
          navigation.navigate('BillScreen')
        }}>
          <Text style={styles.bottom_booking}>Book now !</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default HotelDetailsSCreen

