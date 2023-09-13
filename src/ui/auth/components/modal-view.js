import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Modal } from "react-native";
import { changeScreenWithOutTime } from "../../../utils/navigation-utils";
import { styleFGPSuccess, styleModalView } from "../styles";
import { IconAssets } from "../../../utils/app-assets";
import i18n from "../../../l10n/i18n";
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
              {i18n.t("auth.modal.congratulations")}
            </Text>
            <Text style={styleFGPSuccess.success}>
            {i18n.t("auth.modal.accountReadyToUse")}
            </Text>
            <TouchableOpacity
              style={styleFGPSuccess.btngohome}
              onPress={() => {
                changeScreenWithOutTime(navigation, "LoginEmailScreen");
              }}
            >
              <Text style={styleFGPSuccess.textgohome}>{i18n.t("auth.modal.goToLogin")}</Text>
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
            <Text style={styleModalView.titleModal}>{i18n.t("auth.modal.doYouWantToBack")}</Text>
            <View style={styleModalView.button}>
              <TouchableOpacity
                style={[styleModalView.btncancel, styleModalView.shadowButton]}
                onPress={() => {
                  hideDialogBackScreen();
                }}
              >
                <Text style={styleModalView.textcancel}>{i18n.t("auth.modal.cancel")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styleModalView.btngohome, styleModalView.shadowButton]}
                onPress={() => {
                  hideDialogBackScreen();
                  navigation.pop();
                }}
              >
                <Text style={styleModalView.textgohome}>{i18n.t("auth.modal.yes")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default ModalView;
