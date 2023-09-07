import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const Banner = () => {
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
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            showsPagination={false}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 30 }}></View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width * 0.7,
    width: width,
    borderRadius: 1,
    backgroundColor: '#2b2424',
  },
});

export default Banner;
