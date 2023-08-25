import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoadingCustom from "../../common/custom/custom-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { ColorAssets, securityCommitmentMessage } from "../../utils/app-assets";
import { TouchableOpacity } from "react-native";
import { CustomTextInput } from "../../common/custom/custom-textInput";
import CustomSizebox from "../../common/custom/custom-sizebox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { handleAddHotel } from "../../api/hotel/hotel-service";
import styles from "./styles";
import { handleAddTOR } from "../../api/type_of_room/type-of-room-service";
import { CommonActions } from "@react-navigation/native";

const TypeOfRoom = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const typeOfRoom = useSelector((state) => state.addTypeOfRoom.typeOfRoom);
  const hotelData = useSelector((state) => state.addHotel.hotel);
  const dispatch = useDispatch();

  const handleInputChange = (fieldName, value) => {
    dispatch({ type: "UPDATE_TYPE_OF_ROOM", payload: { fieldName, value } });
  };

  const handleFinish = async () => {
    setIsLoading(true);
    const cleanedImageUrls = hotelData.image.map((item) => item.uri);
    const responseHotel = await handleAddHotel(
      hotelData.name,
      hotelData.id_owner,
      hotelData.address,
      hotelData.description,
      hotelData.open_time,
      hotelData.close_time,
      hotelData.hotline,
      hotelData.place,
      cleanedImageUrls
    );
    const responseTOR = await handleAddTOR(typeOfRoom.name, typeOfRoom.price, typeOfRoom.slot);

    
    if (responseTOR.status === 200 && responseHotel === 200) {
      setIsLoading(false)
      dispatch({ type: 'RESET_STATE' });
      //navigate to MainScreen và remove all previous Screen
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainScreen' }],
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingCustom
          avatar={
            "https://media.discordapp.net/attachments/1135973606862635140/1143382249362948116/logo.png?width=518&height=519"
          }
        />
      ) : (
        <SafeAreaView>
          <View style={styles.topModal}>
            <View style={styles.titleContainer}>
              <Text style={{ color: ColorAssets.whiteColor }}>Done</Text>
              <Text style={styles.titleModal}>Type of Room</Text>
              <TouchableOpacity onPress={handleFinish}>
                <Text style={styles.titleDone}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hrModal}></View>
          </View>
          <View style={styles.bodyModal}>
            <CustomTextInput
              title={"Name"}
              isHaveTitle={true}
              onChangeText={(e) => handleInputChange("name", e)}
              valueText={typeOfRoom.name}
              placeholder={typeOfRoom?.name || "Type of Room"}
            />
            <CustomSizebox height={6} />
            <CustomTextInput
              title={"Price"}
              isHaveTitle={true}
              onChangeText={(e) => handleInputChange("price", e)}
              valueText={typeOfRoom.price}
              placeholder={typeOfRoom?.price || "Price"}
            />
            <CustomSizebox height={6} />
            <CustomTextInput
              title={"Number Of Rooms"}
              isHaveTitle={true}
              onChangeText={(e) => handleInputChange("slot", e)}
              valueText={typeOfRoom.slot}
              placeholder={typeOfRoom?.slot || "4"}
            />
          </View>
          <View style={styles.bottomModal}>
            <Text style={styles.securityCommitmentMessage}>
              {securityCommitmentMessage.message0}
            </Text>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default TypeOfRoom;

