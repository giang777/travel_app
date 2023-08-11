import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    Modal
} from 'react-native'
import * as Device from 'expo-device'
import React, { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorAssets } from "../../utils/app-assets";
import AppBar from "../../common/custom/custom-appbar";
import { CustomButton, CustomHideButton } from "../../common/custom/custom-button";
import { methodPayment } from './fakeData'
import { TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import styles from './styles'

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
                        <Text style={{ fontSize: 18 }}>Please select a payment refund method (only 80% will be refunded)</Text>
                    </View>
                    <View style={{ flex: 1, marginVertical: 10 }}>
                        {methodPayment.map((item, index) => {
                            return (
                                <ItemMethodPayment key={index} item={item} setItemChoose={setItemChoose} isChose={selectedId} />
                            )
                        })}
                        <View style={styles.boxTextPay}>
                            <Text style={styles.textPaid}>Paid: 4.900.000đ</Text>
                            <Text style={styles.textRefund}>Refund: 3.920.000đ</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <CustomButton title={"Confirm Cancellation"} onPress={() => {
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
const ItemMethodPayment = ({ item, setItemChoose, isChose }) => {
    return (
        <TouchableOpacity style={[styles.boxMethodItem, styles.shadowBox]} onPress={() => { setItemChoose(item.id) }}>
            <Image style={styles.imageMethod} source={item.image} />
            <Text style={styles.textMethod}>{item.title}</Text>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                {isChose == item.id ? <View style={styles.statusMethod}>
                    <View style={{ height: 12, width: 12, backgroundColor: ColorAssets.greenColor, borderRadius: 10 }}>
                    </View>
                </View> : undefined}
            </View>
        </TouchableOpacity>
    )
}
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
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>Successful!</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>You have successfully canceled your order. 80% funds will be returned to your account</Text>
                        <TouchableOpacity style={styles.btngohome} onPress={() => navigation.goBack()}>
                            <Text style={styles.textgohome}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

export default PayScreen