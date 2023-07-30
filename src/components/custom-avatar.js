import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ColorAssets } from "../utils/app-assets";

const CustomAvatar = () => {
  return (
    <ImageBackground
      borderRadius={90}
      source={{
        uri: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/359823509_1317291255555445_134357312411589415_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vF_kTA4BIwcAX9M-_rS&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCk0gF13XNsVO65tvnJOuda-oQyI3FEmd54R_oiGx42Tw&oe=64B549A3",
      }}
      style={styles.container}
    >
      <TouchableOpacity style={styles.buttonEdit}>
        <Ionicons
          name="pencil-sharp"
          color={ColorAssets.whiteColor}
          size={28}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CustomAvatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 150,
    height: 150,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonEdit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: ColorAssets.greenColor,
  },
});
