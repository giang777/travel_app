import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButtonProfile } from "../../../common/custom/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Right from "../../../../assets/icons/right.svg";
import { useEffect } from "react";
import { handleGetWards } from "../../../api/provinces/province-service";
import { setWards } from "../../../redux/actions/typeAction";
import { ColorAssets } from "../../../utils/app-assets";

const AddDistrictScreen = ({ route, navigation }) => {
  const { province } = route.params;
  const districts = useSelector((state) => state.location.districts);
  const ditpatch = useDispatch();
  const filteredDistricts = districts.filter(
    (item) => item.province_code === province.code
  );
  const fetchApiWart = async () => {
    const responseWard = await handleGetWards();

    if (responseWard.status == 200) ditpatch(setWards(responseWard.data));
    else console.log("error at add_district.js");
  };
  const handleDistrictPress = (district) => {
    // Chuyển đến màn hình "Add District" và truyền thông tin về tỉnh
    navigation.navigate("AddWardScreen", { district,province:province });
  };
  useEffect(() => {
    fetchApiWart();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
          {filteredDistricts.map((district) => (
            <View key={district.code}>
              <CustomButtonProfile
                onPress={() => handleDistrictPress(district)}
                iconEnd={<Right />}
                titleLeft={district.name}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AddDistrictScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:ColorAssets.whiteColor
  },
});
