import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ColorAssets, IconAssets, ImageAssets } from "../../utils/app-assets";
import { handleGetRoom } from "../../api/room/room-service";

const Room_in_hotel = (props) => {
  const arrOptions = [
    { id: 1, title: "Normal" },
    { id: 2, title: "High" },
    { id: 3, title: 'Vip' },
  ]

  const [indexOptions, setindexOptions] = useState(1);

  const get_data_room = async ()=>{
    const data = await handleGetRoom();
    console.log("data_room",data);
  };

  useEffect(()=>{
    get_data_room();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 15, paddingTop: 8 }}>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
          <TouchableOpacity onPress={()=>{ props.navigation.goBack();}}>
          <Icon name='arrow-back' size={30} color={'black'} />
          </TouchableOpacity>
            <Text style={styles.nameApp}>My Room</Text>
          </View>
          <View style={styles.viewHeaderItem}>
            <TouchableOpacity onPress={()=>{
              props.navigation.navigate("AddRoomScreen");
            }}>
            <Text style={styles.textAddroom}>Add Room</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Options*/}
        <View style={styles.viewOptions}>
          {arrOptions.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.itemOptions,
                  indexOptions === item.id
                    ? styles.itemOptions_isActive
                    : styles.itemOptions_noActive,
                ]}
                onPress={() => {
                  setindexOptions(item.id);
                }}
                key={index}
              >
                <Text
                  style={[
                    { fontWeight: "bold", fontSize: 16 },
                    indexOptions === item.id
                      ? { color: "white" }
                      : { color: ColorAssets.greenColor },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      </SafeAreaView>
  )
}

export default Room_in_hotel

