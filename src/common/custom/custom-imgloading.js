import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

const AnimatedGradient = ({ typeLoad }) => {
  const animation = new Animated.Value(0);

  setTimeout(() => {
    // clearTimeout(setTime)
    console.log("vao day");
    startAnimation();
  }, 100);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  };

  const interpolateColors = animation.interpolate({
    inputRange: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [
      "#FAFAFA",
      "#F5F5F5",
      "#EEEEEE",
      "#E0E0E0",
      "#E0E0E0",
      "#E0E0E0",
      "#EEEEEE",
    ],
  });

  const animatedStyles = {
    backgroundColor: interpolateColors,
  };

  return (
    <View>
      {typeLoad == 1 ? (
        <View style={styles.viewBackgroundImage}>
          <Animated.View
            style={[styles.backgroundLoadingHorizontial, animatedStyles]}
          ></Animated.View>
        </View>
      ) : typeLoad == 2 ? (
        <View style={styles.viewBackgroundImage}>
          <Animated.View
            style={[styles.backgroundLoadingVertical, animatedStyles]}
          ></Animated.View>
        </View>
      ) : undefined}
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundLoadingHorizontial: {
    height: 310,
    width: 260,
    borderRadius: 20,
    marginRight: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  backgroundLoadingVertical: {
    width: "100%",
    height: 215,
    borderRadius: 20,
    marginRight: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
});

export default AnimatedGradient;
