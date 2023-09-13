import {
    ScrollView,
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    Modal
} from 'react-native'
import * as Device from 'expo-device'
import React, {  useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from "../../common/custom/custom-appbar";
import { CustomButton, CustomHideButton } from "../../common/custom/custom-button";
import { methodPayment } from '../booking/fakeData'
import { TouchableOpacity } from 'react-native';
import styles from '../booking/styles'
import ItemMethodPayment from './components/item-method-payment';
import { ColorAssets } from '../../utils/app-assets';
import i18n from '../../l10n/i18n';

const PayScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const setItemChoose = (value) => {
        setSelectedId(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <AppBar onPress={() => navigation.goBack()} title={"Cancel Hotel Booking"} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Device.osName === 'iOS' ? "padding" : "height"}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 18 }}>{i18n.t("paying.selectPaymentRefundMethod")}</Text>
                    </View>
                    <View style={{ flex: 1, marginVertical: 10 }}>
                        {methodPayment.map((item, index) => {
                            return (
                                <ItemMethodPayment key={index} item={item} setItemChoose={setItemChoose} isChose={selectedId} />
                            )
                        })}
                        <View style={styles.boxTextPay}>
                            <Text style={styles.textPaid}>{i18n.t("paying.textPaid")} 4.900.000đ</Text>
                            <Text style={styles.textRefund}>{i18n.t("paying.textRefund")} 3.920.000đ</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <CustomButton title={i18n.t("paying.confirmCancellation")} onPress={() => {
                            // payment at here
                            setShowModal(true)
                        }} />
                    </View>
                    <ModalView show={showModal} navigation={navigation} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default PayScreen

  const ModalView = ({ show, navigation }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
            >
                <View style={[styles.centeredView, show ? { flex: 1 } : undefined]}>
                    <View style={styles.modalView}>
                        <Image source={require('../../../assets/icons/done.png')} style={{ width: 250, height: 250 }} />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>{i18n.t("paying.successfulText.title")}</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{i18n.t("paying.successfulText.description")}</Text>
                        <TouchableOpacity style={styles.btngohome} onPress={() => navigation.goBack()}>
                            <Text style={styles.textgohome}>{i18n.t("paying.goBackButtonText")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    )
  }