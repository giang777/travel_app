import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ColorAssets, ImageAssets } from "../../utils/app-assets";
import Sizebox from "../../utils/sizebox";
import CustomButton from "../../components/custom-button";
import { useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";

const WelcomeV1_1 = ({ navigation }) => {
  const { width, height } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={{ width: width, height: height / 1.8 }}
          source={ImageAssets.banner1}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Travely safely,{"\n"}comfortably & easily
          </Text>
          <Text style={styles.subTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            illum minus libero totam, hic corporis nobis voluptatibus, deleniti,
            omnis repudiandae similique laudantium maxime. Perspiciatis veniam,
            dolore fugiat modi iusto nulla!
          </Text>
          <View style={styles.dotContainer}>
            <Text style={styles.dot}></Text>
            <Text style={styles.dot}></Text>
            <Text style={styles.dot}></Text>
          </View>
          <CustomButton title="Next" onPress={() => {}} />

          <Sizebox height={15} />
          <TouchableOpacity
            style={styles.buttonSkip}
            onPress={() =>
              navigation.dispatch(StackActions.replace("LoginHomeScreen"))
            }
          >
            <Text style={styles.titleSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "flex-start",
  },

  content: {
    marginVertical: 10,
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: 600,
  },
  subTitle: {
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 14,
    color: ColorAssets.greyColor,
  },

  buttonSkip: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 20,
    backgroundColor: ColorAssets.greenColor270,
    alignItems: "center",
  },

  titleSkip: {
    fontWeight: "bold",
    color: ColorAssets.greenColor,
    fontSize: 16,
  },
  dotContainer: {
    marginBottom: 15,
    flexDirection: "row",
  },
  dot: {
    marginHorizontal: 5,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: ColorAssets.greyColor,
  },
});

export default WelcomeV1_1;
