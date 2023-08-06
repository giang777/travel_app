import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

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
      <View style={styles.container}>
        <View style={styles.swiper}>
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
                  style={styles.imageBanner}
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
    height: width / 3,
    width: width - 200,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'red',
  },
});

export default Slider;
