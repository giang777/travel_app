import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ImageAssets,
  subTitleAssets,
  titleAssets,
} from "../../utils/app-assets";
import Sizebox from "../../common/custom/custom-sizebox";
import { CustomButton } from "../../common/custom/custom-button";
import { StackActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../../redux/actions/typeAction";
import { styleWelcomeV1_1 } from "./styles";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";

const WelcomeV1_1 = ({ navigation }) => {
  const first = useSelector((state) => state.typeReducer.first);
  const dispatch = useDispatch();
  const handleIncreaseCount = () => {
    if (first >= 2) {
      changeScreenWithOutTime(navigation, "LoginHomeScreen");
    } else {
      dispatch(increaseCount());
    }
  };

  return (
    <View style={styleWelcomeV1_1.container}>
      <ScrollView>
        <Image
          style={styleWelcomeV1_1.banner}
          source={ImageAssets[`banner${first}`]}
        />
        <View style={styleWelcomeV1_1.content}>
          <Text style={styleWelcomeV1_1.title}>
            {titleAssets[`title${first}`]}
          </Text>
          <Text style={styleWelcomeV1_1.subTitle}>
            {subTitleAssets[`subTitle${first}`]}
          </Text>
          <Sizebox height={10} />
          <View style={styleWelcomeV1_1.dotContainer}>
            <View
              style={[
                styleWelcomeV1_1.dot,
                first === 0 && styleWelcomeV1_1.selectedDot,
              ]}
            ></View>
            <View
              style={[
                styleWelcomeV1_1.dot,
                first === 1 && styleWelcomeV1_1.selectedDot,
              ]}
            ></View>
            <View
              style={[
                styleWelcomeV1_1.dot,
                first === 2 && styleWelcomeV1_1.selectedDot,
              ]}
            ></View>
          </View>
          <CustomButton title="Next" onPress={handleIncreaseCount} />

          <Sizebox height={20} />
          <TouchableOpacity
            style={styleWelcomeV1_1.buttonSkip}
            onPress={() =>
              navigation.dispatch(StackActions.replace("LoginHomeScreen"))
            }
          >
            <Text style={styleWelcomeV1_1.titleSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeV1_1;
