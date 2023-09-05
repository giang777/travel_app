import { StyleSheet, Text, View, Image, FlatList } from "react-native";
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
import ModalDropdown from 'react-native-modal-dropdown';
const AddRoomScreen = ({ navigation }) => {

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();
   
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
                title="Name"
                placeholder={"Room Name"}
                isHaveTitle={true}
                
              />
              <CustomTextInput
                title="Room Acreage"
                placeholder={"Room Acreage"}
                isHaveTitle={true}
              />
              <CustomTextInput
                title="Description"
                isHaveTitle={true}
                placeholder={"Room Description"}
              />
             
             {/*Cái này dùng dropdown */}
              <CustomTextInput
                title={"Type Room"}
                placeholder={"Type Roome"}
                isHaveTitle={true}
              />

                
            </View>
            
            <View style={styles.bottomModal}>
              <TouchableOpacity
                style={styles.btnContinueModal}
                //onPress={addHotel}
              >
                <Text style={styles.textContinueModal}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnCancelModal}
                onPress={() => navigation.pop()}
              >
                <Text style={styles.textCancelModal}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AddRoomScreen;
