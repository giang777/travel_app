import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useEffect } from "react";
import {
  handleGetDistricts,
  handleGetProvinces,
} from "../../../api/provinces/province-service";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButtonProfile } from "../../../common/custom/custom-button";
import Right from "../../../../assets/icons/right.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDistricts, setProvinces } from "../../../redux/actions/typeAction";
import { ColorAssets } from "../../../utils/app-assets";
import LoadingCustom from "../../../common/custom/custom-loading";

const AddressScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.location.provinces);
  const fetchApiProvince = async () => {
    setIsLoading(true);
    const response = await handleGetProvinces();
    const responseDistrict = await handleGetDistricts();
    if (response.status == 200 && responseDistrict.status == 200) {
      dispatch(setProvinces(response.data));
      dispatch(setDistricts(responseDistrict.data));
      setIsLoading(false);
    } else console.log("error at add_province.js");
  };
  const handleProvincePress = (province) => {
    // Chuyển đến màn hình "Add District" và truyền thông tin về tỉnh
    navigation.navigate("AddDistrictScreen", { province });
  };
  useEffect(() => {
    fetchApiProvince();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingCustom
          avatar={
            "https://media.discordapp.net/attachments/1135973606862635140/1143382249362948116/logo.png?width=518&height=519"
          }
        />
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            {provinces.map((province) => (
              <View key={province.code}>
                <CustomButtonProfile
                  onPress={() => handleProvincePress(province)}
                  iconEnd={<Right />}
                  titleLeft={province.name}
                />
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: ColorAssets.whiteColor,
  },
});
