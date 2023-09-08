import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButtonProfile } from "../../../common/custom/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { ColorAssets } from "../../../utils/app-assets";
import { changeScreenWithOutTime } from "../../../utils/navigation-utils";

const AddWardScreen = ({ route,navigation }) => {
  const { district,province } = route.params;
  const wards = useSelector((state) => state.location.wards);
  const filteredWards = wards.filter(
    (item) => item.district_code === district.code
  );
  const dispatch = useDispatch();
  const handleInputChange = (fieldName, value) => {
    dispatch({ type: "UPDATE_HOTEL_FIELD", payload: { fieldName, value } });
    changeScreenWithOutTime(navigation,"AddHotelScreen")
    console.log(value);


  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {filteredWards.map((ward) => (
            <View key={ward.code}>
              <CustomButtonProfile onPress={() => handleInputChange("address", `${ward.name}, ${district.name}, ${province.name}`)} titleLeft={ward.name} />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AddWardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorAssets.whiteColor,
  },
});
