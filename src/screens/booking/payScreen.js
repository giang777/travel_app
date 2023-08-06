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
import AppBar from "../../components/custom/custom-appbar";
import { CustomButton, CustomHideButton } from "../../components/custom/custom-button";
import { methodPayment } from './fakeData'
import { TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';

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
                        <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 16, marginRight: 10 }}>Paid: 4.900.000đ</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Refund: 3.920.000đ</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <CustomButton title={"Confirm Cancellation"} onPress={() => {
                            // xử lý thanh toán ở đây nhé
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
        <TouchableOpacity style={[{ flexDirection: 'row', marginHorizontal: 20, padding: 20, borderRadius: 20, alignItems: 'center' }, styles.shadowBox]} onPress={() => { setItemChoose(item.id) }}>
            <Image style={{ height: 30, width: 30 }} source={item.image} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20 }}>{item.title}</Text>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                {isChose == item.id ? <View style={{ borderColor: ColorAssets.greenColor, borderRadius: 10, borderWidth: 2, padding: 2 }}>
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
                        <Image source={require('../../assets/icons/done.png')} style={{ width: 250, height: 250 }} />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>Successful!</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>You have successfully canceled your order. 80% funds will be returned to your account</Text>
                        <TouchableOpacity style={styles.btngohome} onPress={() => { navigation.dispatch(StackActions.replace("MainScreen")) }}>
                            <Text style={styles.textgohome}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

export default PayScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorAssets.whiteColor,
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flex: 1
    },
    content: {
        alignItems: "center",
        paddingTop: 25,
        paddingHorizontal: 15,
    },
    shadowBox: {
        borderColor: 'grey',
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    footer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    //modal
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btngohome: {
        backgroundColor: ColorAssets.greenColor,
        width: '100%',
        borderRadius: 100,
        marginTop: 20
    },
    textgohome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 15
    }
})