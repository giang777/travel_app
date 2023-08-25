import React, { Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
} from "react-native";
import { ColorAssets } from "../../utils/app-assets";

const { height, width } = Dimensions.get("window");

export default class LoadingCustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: [],
    };

    this.counter = 1;
    this.setInterval = null;
    this.anim = new Animated.Value(1);
  }

  componentDidMount() {
    this.setCircleInterval();
  }

  setCircleInterval() {
    this.setInterval = setInterval(
      this.addCircle.bind(this),
      this.props.interval
    );
    this.addCircle();
  }

  addCircle() {
    this.setState({ circles: [...this.state.circles, this.counter] });
    this.counter++;
  }

  render() {
    const { size, avatar, avatarBackgroundColor, interval } = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.circles.map((circle) => (
          <Pulse key={circle} {...this.props} />
        ))}

        <TouchableOpacity
          activeOpacity={1}
          style={{
            transform: [
              {
                scale: this.anim,
              },
            ],
          }}
        >
          <Image
            source={{ uri: avatar }}
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: avatarBackgroundColor,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

LoadingCustom.propTypes = {
  interval: PropTypes.number,
  size: PropTypes.number,
  pulseMaxSize: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  avatarBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  getStyle: PropTypes.func,
};

LoadingCustom.defaultProps = {
  interval: 2000,
  size: 100,
  pulseMaxSize: 250,
  avatar: undefined,
  avatarBackgroundColor: "white",
  borderColor: "#5ED2C6",
  backgroundColor: "#5ED2C6",
  getStyle: undefined,
};
const Pulse = (props) => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: props.interval,
      easing: Easing.in,
      useNativeDriver: false,
    }).start();
  }, []);

  const { size, pulseMaxSize, borderColor, backgroundColor, getStyle } = props;

  return (
    <View
      style={[
        styles.circleWrapper,
        {
          width: pulseMaxSize,
          height: pulseMaxSize,
          marginLeft: -pulseMaxSize / 2,
          marginTop: -pulseMaxSize / 2,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            borderColor,
            backgroundColor,
            width: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [size, pulseMaxSize],
            }),
            height: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [size, pulseMaxSize],
            }),
            borderRadius: pulseMaxSize / 2,
            opacity: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          getStyle && getStyle(anim),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: width / 2,
    top: height / 2,
  },
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
  },
});
