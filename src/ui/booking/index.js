import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  arrOptions,
  arrFakeDataOngoing,
  arrFakeDataCompleted,
  arrFakeDataCanceled,
} from "./fakeData";
import { ColorAssets, IconAssets, ImageAssets } from "../../utils/app-assets";
import {
  ItemOngoing,
  ItemCompleted,
  ItemCanceled,
} from "../../common/renderItemBooking/index";
import Modal from "react-native-modal";
import Search from "../../../assets/icons/search.svg";
import OnGoingScreen from "./components/on-going-screen";
import CompletedScreen from "./components/completed-screen";
import CanceledScreen from "./components/canceled-screen";
import i18n from "../../l10n/i18n";

const BookingScreen = ({ navigation }) => {
  const [indexOptions, setindexOptions] = useState(1);
  const [modal, setshowModal] = useState(false);
  const hideModal = () => {
    setshowModal(false);
  };
  const showModal = () => {
    setshowModal(true);
  };
  useEffect(() => {}, [indexOptions]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 15, paddingTop: 8 }}>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameApp}>{i18n.t("booking.title")}</Text>
          </View>
          <View style={styles.viewHeaderItem}>
            <TouchableOpacity>
              <Search size={30} />
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
      {/*Body*/}
      {indexOptions == 1 ? (
        <OnGoingScreen showModal={showModal} />
      ) : indexOptions == 2 ? (
        <CompletedScreen />
      ) : (
        <CanceledScreen />
      )}
      <WrapperComponent
        hideModal={hideModal}
        hide={modal}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const WrapperComponent = ({ hide, hideModal, navigation }) => {
  const confirmCancel = () => {
    hideModal();
    navigation.navigate("PayScreen");
  };
  return (
    <View>
      <Modal
        isVisible={hide}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        swipeDirection={"down"}
        onSwipeComplete={hideModal}
        animationIn={"bounceInUp"}
        animationOut={"bounceOutDown"}
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={styles.boxModal}>
          <View style={styles.topModal}>
            <View style={styles.iconBar}></View>
            <Text style={styles.titleModal}>{i18n.t("booking.cancelBooking")}</Text>
            <View style={styles.hrModal}></View>
            <Text style={styles.text1Modal}>{i18n.t("booking.cancelConfirmation")}</Text>
          </View>

          <Text style={styles.text2Modal}>{i18n.t("booking.refundPolicy")}</Text>

          <View style={styles.bottomModal}>
            <TouchableOpacity style={styles.btnCancelModal} onPress={hideModal}>
              <Text style={styles.textCancelModal}>
                {i18n.t("booking.cancel")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContinueModal}
              onPress={confirmCancel}
            >
              <Text style={styles.textContinueModal}>
                {i18n.t("booking.yesContinue")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// // Màn hình Ongoing

export default BookingScreen;
