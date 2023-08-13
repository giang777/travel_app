import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { ColorAssets } from "../../../utils/app-assets";
import {
  CustomTextInput,
  CustomTextInput2,
} from "../../../common/custom/custom-textInput";
import { ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useState } from "react";
import { handleAddHotel } from "../../../api/hotel/hotel-service";
import SharedPreferences from "../../../database/share_preferences_helper";
import { useEffect } from "react";
import {
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const BottomSheet = ({ visible, onCancel, onFinish }) => {
  //choose phone number
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [nameHotel, setNameHotel] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [place, setPlace] = useState("");
  const phoneInput = React.useRef(null);
  const [idUser, setIdUser] = useState("");

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant camera access to use this app"
      );
      return false;
    }
    return true;
  }

  async function camerapressHandler(selectedKey) {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      aspect: [9, 16],
      quality: 1,
    });

    if (!image.canceled) {
      const updatedData = data.map((item) => {
        if (item.key === selectedKey) {
          console.log("equals key " + item.key);
          return { ...item, uri: image.assets[0].uri };
        }
        return item;
      });
      setData(updatedData);
    }
  }

  const [data, setData] = useState([
    { uri: " ", key: "1" },
    { uri: " ", key: "2" },
    { uri: " ", key: "3" },
    { uri: " ", key: "4" },
    { uri: " ", key: "5" },
    { uri: " ", key: "6" },
  ]);
  const render_item = (item) => {
    console.log(item.uri);
    return (
      <TouchableOpacity
        onPress={() => {
          camerapressHandler(item.key);
        }}
      >
        <View style={styles.item} key={item.key}>
          <Image source={{ uri: item.uri }} style={styles.imageStyle} />
        </View>
      </TouchableOpacity>
    );
  };

  const getUserInfor = () => {
    SharedPreferences.GET_USER_INFOR()
      .then((userInfoString) => {
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          setIdUser(userInfo.id);
        } else {
          console.log("User information not found.");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user information:", error);
      });
  };
  useEffect(() => {
    getUserInfor();
  }, []);
  const addHotel = async () => {
    const response = await handleAddHotel(
      nameHotel,
      idUser,
      address,
      description,
      openTime,
      closeTime,
      phoneNumber,
      place
    );

    if (response === 200) onCancel();
  };

  return (
    <Modal
      isVisible={visible}
      swipeDirection={"down"}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
    >
      <ScrollView>
        <View style={styles.boxModal}>
          <View style={styles.topModal}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleModal}>Add Hotel</Text>
            </View>
            <View style={styles.hrModal}></View>
            <Text style={styles.text1Modal}>Media</Text>
            <View
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <FlatList
                data={data}
                renderItem={({ item }) => render_item(item)}
                keyExtractor={(item) => item.key}
                numColumns={3}
              />
            </View>
          </View>
          <View style={styles.bodyModal}>
            <CustomTextInput
              title="Name"
              isHaveTitle={true}
              onChangeText={setNameHotel}
            />
            <CustomTextInput
              title="Address"
              isHaveTitle={true}
              onChangeText={setAddress}
            />
            <CustomTextInput
              title="Description"
              isHaveTitle={true}
              onChangeText={setDescription}
            />
            <View style={styles.rowTime}>
              <CustomTextInput2
                textPlaceHolder={"Open time"}
                onChangeText={setOpenTime}
              />
              <CustomTextInput2
                textPlaceHolder={"Close time"}
                onChangeText={setCloseTime}
              />
            </View>
            <Text style={styles.text1Modal}>Hotline</Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
              defaultCode="VN"
              layout="first"
              // withShadow
            />
            <CustomTextInput
              title="Place"
              isHaveTitle={true}
              onChangeText={setPlace}
            />
          </View>
          <View style={styles.bottomModal}>
            <TouchableOpacity
              style={styles.btnContinueModal}
              onPress={addHotel}
            >
              <Text style={styles.textContinueModal}>Finish</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancelModal} onPress={onCancel}>
              <Text style={styles.textCancelModal}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  boxModal: {
    backgroundColor: "white",
  },
  topModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  titleModal: {
    fontSize: 21,
    fontWeight: "bold",
    color: ColorAssets.blackolor,
    marginVertical: 20,
  },
  rowTime: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  hrModal: {
    backgroundColor: "#F5F5F5",
    height: 1,
    marginBottom: 20,
    width: "100%",
  },
  bodyModal: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    display: "flex",
    backgroundColor: ColorAssets.whiteColor,
    justifyContent: "space-around",
  },
  bottomModal: {
    paddingHorizontal: 10,
  },
  text1Modal: {
    fontSize: 17,
    width: "100%",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  text2Modal: {
    fontSize: 14.5,
    textAlign: "center",
    color: "grey",
    marginBottom: 25,
  },
  btnCancelModal: {
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 50,
    backgroundColor: "#E3F6EB",
  },
  textCancelModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.greenColor,
  },
  btnContinueModal: {
    backgroundColor: ColorAssets.greenColor,
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 50,
  },
  phoneContainer: {
    width: "100%",
    borderColor: "gray",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 18,
    fontSize: 16,
    paddingVertical: 2,
  },
  textInput: {
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 18,
    fontSize: 16,
  },
  textContinueModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  item: {
    width: 120,
    height: 160,
    margin: 3,
    borderRadius: 8,
    backgroundColor: "#D4D4D4",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
  },
  imageStyle: {
    width: 120,
    height: 160,
    resizeMode: "contain",
  },
  item_text: {
    fontSize: 40,
    color: "#FFFFFF",
  },
});
