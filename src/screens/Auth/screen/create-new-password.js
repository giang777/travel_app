import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState } from 'react'
import * as Device from 'expo-device'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorAssets, containScreenAssets } from "../../../utils/app-assets";
import AppBar from "../../../components/custom-appbar";
import { CustomButton, CustomHideButton } from '../../../components/custom-button';
import { CustomTextInput } from '../../../components/custom-textInput'

const CreateNewPassword = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    return (
        <SafeAreaView style={[containScreenAssets.safeAreaView, showModal ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: ColorAssets.whiteColor, }]}>
            <View style={containScreenAssets.container}>
                <AppBar onPress={() => navigation.goBack()} title={'Forgot Password'} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Device.osName === 'iOS' ? "padding" : "height"}>
                    <ScrollView
                        style={containScreenAssets.scrollView}
                        contentContainerStyle={containScreenAssets.scrollViewContent}>
                        <View style={{ flexGrow: 1 }}>
                            <View style={{ width: '100%', alignItems: 'center', paddingVertical: 50 }}>
                                <Image source={require('../../../assets/icons/shield.png')} />
                            </View>
                            <View style={{ paddingHorizontal: 15 }}>
                                <Text style={{ fontSize: 16, marginLeft: 2 }}>Create Your New Password</Text>
                                <Sizebox height={30} />
                                <CustomTextInput condition={password.length > 5 ? true : false} fillText={password ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setPassword(text) }} placeholder={"Password (at least 6 characters)"} />
                                <Sizebox height={20} />
                                <CustomTextInput condition={rePassword == password ? true : false} fillText={rePassword ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setRePassword(text) }} placeholder={"Confirm password"} />
                            </View>
                            <View style={styles.footer}>
                                {(password.length > 5 && rePassword == password) ? <CustomButton
                                    title="Continue"
                                    onPress={() => {
                                        setShowModal(true);
                                    }}
                                /> : <CustomHideButton title={"Continue"} />}
                            </View>
                        </View>
                        <ModalView show={showModal} navigation={navigation} />
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
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
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>Congratulations!</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>Your account is ready to use</Text>
                        <TouchableOpacity style={styles.btngohome} onPress={() => { navigation.navigate("LoginEmailScreen") }}>
                            <Text style={styles.textgohome}>Go to Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

export default CreateNewPassword

const styles = StyleSheet.create({
    boxTitle: {
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    textForgotPass: {
        fontSize: 16,
        paddingHorizontal: 15,
        marginVertical: 30
    },
    titleSignIn: {
        color: ColorAssets.greenColor,
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: "flex-end",
        flex: 1
    },
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