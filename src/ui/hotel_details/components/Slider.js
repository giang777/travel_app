import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";
import styles from './styles';
var { width, height } = Dimensions.get("window");

const Slider = ({ gallery }) => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData(gallery);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.slider_container}>
        <View style={styles.slider_swiper}>
          <Swiper
            style={{ height: width / 3 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            showsPagination={false}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.slider_imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};


export default Slider;
