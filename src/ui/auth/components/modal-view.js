import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Modal } from "react-native";
import { changeScreenWithOutTime } from "../../../utils/navigation-utils";
import { styleFGPSuccess, styleModalView } from "../styles";
import { IconAssets } from "../../../utils/app-assets";
const ModalView = ({
  show,
  navigation,
  hideDialogBackScreen,
  isForgotPassword,
}) => {
  return isForgotPassword ? (
    <View style={styleFGPSuccess.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View
          style={[styleFGPSuccess.centeredView, show ? { flex: 1 } : undefined]}
        >
          <View style={styleFGPSuccess.modalView}>
            <Image source={IconAssets.done} style={styleFGPSuccess.icon} />
            <Text style={styleFGPSuccess.congratulationView}>
              Congratulations!
            </Text>
            <Text style={styleFGPSuccess.success}>
              Your account is ready to use
            </Text>
            <TouchableOpacity
              style={styleFGPSuccess.btngohome}
              onPress={() => {
                changeScreenWithOutTime(navigation, "LoginEmailScreen");
              }}
            >
              <Text style={styleFGPSuccess.textgohome}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  ) : (
    <View style={styleModalView.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View
          style={[styleModalView.centeredView, show ? { flex: 1 } : undefined]}
        >
          <View style={styleModalView.modalView}>
            <Text style={styleModalView.titleModal}>Do you want to back?</Text>
            <View style={styleModalView.button}>
              <TouchableOpacity
                style={[styleModalView.btncancel, styleModalView.shadowButton]}
                onPress={() => {
                  hideDialogBackScreen();
                }}
              >
                <Text style={styleModalView.textcancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styleModalView.btngohome, styleModalView.shadowButton]}
                onPress={() => {
                  hideDialogBackScreen();
                  navigation.pop();
                }}
              >
                <Text style={styleModalView.textgohome}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default ModalView;
