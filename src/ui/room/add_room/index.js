import { StyleSheet, Text, View, Image, FlatList, Alert,ActivityIndicator} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ColorAssets } from "../../../utils/app-assets";
import {
  CustomTextInput,
  CustomTextInput2,
} from "../../../common/custom/custom-textInput";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useEffect } from "react";
import { handledGetTOR } from "../../../api/type_of_room/type-of-room-service";
import RNPickerSelect from 'react-native-picker-select';
import { handleAddRoom } from "../../../api/room/room-service";
import i18n from "../../../l10n/i18n";
const AddRoomScreen = (props) => {

  const [acreage, setacreage] = useState("");
  const [description, setdescription] = useState("");
  const [type_of_room, setType_of_room] = useState("");
  const [arrTypeRoom, setarrTypeRoom] = useState([]);
  const [statusLoading, setStatusLoading] = useState(false);
  const [validate, setvalidate] = useState(false)

  const get_data_type_of_room = async ()=>{
    const data = await handledGetTOR();
    const arr_temp = data.map((item,index)=>{
      return {label:item.name,value:item._id}
    });
    setarrTypeRoom([...arr_temp]);
    //console.log("data_type_of_room",arr_temp);
  };

  const addRoom = async ()=>{
    if(acreage <=0 || isNaN(acreage)){
      Alert.alert("Thông báo ","Diện thích không hợp lệ");
      return;
    }

    if(!type_of_room){
      Alert.alert("Thông báo ","Vui lòng chọn loại phòng");
      return;
    }
    
    setStatusLoading(true);
    try {
      const params = {
      typeRoom: type_of_room,
      description: description,
      acreage: acreage,
    }

      const response = await handleAddRoom(params);
      console.log("respone",response);
      if(response.status == '201'){
        console.log("OK");
      }
    } catch (error) {
      console.log("Err",error);
    }finally{
      setStatusLoading(false);
    }
  }

  useEffect(()=>{
    get_data_type_of_room();
  },[])

  useEffect(()=>{
    setvalidate(true)
    if(description && acreage){
      setvalidate(false);
    }
  },[description,acreage])

   
  return (
    <View style={{flex:1, backgroundColor: ColorAssets.whiteColor }}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.boxModal}>
            <View style={styles.topModal}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleModal}>Add Room</Text>
              </View>
            </View>
            <View style={styles.bodyModal}>

              <CustomTextInput
                title={i18n.t("addRoom.RoomAcreage")}
                placeholder={i18n.t("addRoom.RoomAcreage")}
                isHaveTitle={true}
                errorText={i18n.t("alert.string_emty")}
                fillText={acreage ? true : false}
                onChangeText={(value)=>{setacreage(value)}}
              />
              <CustomTextInput
                title={i18n.t("addRoom.Description")}
                isHaveTitle={true}
                placeholder={i18n.t("addRoom.Description")}
                errorText={i18n.t("alert.string_emty")}
                fillText={description ? true : false}
                onChangeText={(value)=>{setdescription(value)}}
              />

              <Text style={styles.title}>{i18n.t("addRoom.TypeRoom")}</Text>
              
              <RNPickerSelect
                  onValueChange={(value) => {setType_of_room(value)}}
                  pickerProps={{accessibilityLabel:i18n.t("addRoom.SelectTypeOfRoom")}}
                  placeholder={{ label: i18n.t("addRoom.SelectTypeOfRoom"), value: '' }}
                  items={arrTypeRoom}
                />
             
             
             {/*Cái này dùng dropdown */}
             
           
            </View>
            
            <View style={styles.bottomModal}>
              <TouchableOpacity
                disabled={validate}
                style={[styles.btnContinueModal,validate ? {opacity:0.4} : null]}
                onPress={addRoom}
              >
                <Text style={styles.textContinueModal}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnCancelModal}
                onPress={() => props.navigation.pop()}
              >
                <Text style={styles.textCancelModal}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {statusLoading ? (
          <View style={styles.boxLoading}>
            <ActivityIndicator size={"large"} color="#2196F3" />
          </View>
        ) : (
          <></>
        )}
    </View>
  );
};

export default AddRoomScreen;
