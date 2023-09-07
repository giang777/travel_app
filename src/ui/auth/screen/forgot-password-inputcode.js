import { styleFGPInputCodeheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorAssets, containScreenAssets } from "../../../utils/app-assets";
import AppBar from "../../../common/custom/custom-appbar";
import { CustomButton, CustomHideButton } from '../../../common/custom/custom-button';
import { styleFGPInputCode } from '../styles'
import i18n from "../../../l10n/i18n"


const ForgotPasswordInputCode = ({ navigation }) => {
    const inputRefs = [useRef(''), useRef(''), useRef(''), useRef('')];
    const [checkButtonShow, setChecjButtonShow] = useState(false)
    const [focusedIndex, setFocusedIndex] = useState(0);
    const handleCodeChange = (text, index) => {
        inputRefs[index].current.value = text
        if (index < inputRefs.length - 1 && text != '') {
            inputRefs[index + 1].current.focus();
        }
        for (const x of inputRefs) {
            if (x.current.value !== undefined && x.current.value !== '') {
                setChecjButtonShow(true)
            } else {
                setChecjButtonShow(false)
            }
        }
    };
    return (
        <SafeAreaView style={containScreenAssets.safeAreaView}>
            <View style={containScreenAssets.container}>
                <AppBar onPress={() => navigation.goBack()} />
                    <ScrollView
                        style={containScreenAssets.scrollView}
                        contentContainerStyle={containScreenAssets.scrollViewContent}>
                        <View style={styleFGPInputCode.content}>
                            <Text style={styleFGPInputCode.text16}>{i18n.t("auth.fogotPassword.FGPInput.codeHasBeenSentTo")}</Text>
                            <View style={styleFGPInputCode.formInput}>
                                {inputRefs.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <TextInput textAlign='center'
                                            ref={item}
                                            maxLength={1}
                                            autoFocus={index == 0 ? true : false}
                                            keyboardType='numeric'
                                            style={[styleFGPInputCode.textNumber, focusedIndex == index ? styleFGPInputCode.focus : styleFGPInputCode.unFocus]}
                                            onFocus={() => { setFocusedIndex(index) }}
                                            onChangeText={(text) => { handleCodeChange(text, index) }} />
                                        {index !== inputRefs.length - 1 && <View style={{ width: '5%' }}></View>}
                                    </React.Fragment>
                                ))}
                            </View>
                            <View style={styleFGPInputCode.timeCounterForm}>
                                <Text style={styleFGPInputCode.text15}>{i18n.t("auth.fogotPassword.FGPInput.resendCodeIn")}</Text>
                                <Text style={styleFGPInputCode.timeCounter}>55</Text>
                                <Text style={styleFGPInputCode.text15}> s</Text>
                            </View>
                        </View>
                        <View style={styleFGPInputCode.footer}>
                            {checkButtonShow ? <CustomButton
                                title={i18n.t("auth.fogotPassword.FGPInput.verify")}
                                onPress={() => { navigation.navigate("CreateNewPassword"); }}
                            /> : <CustomHideButton title={i18n.t("auth.fogotPassword.FGPInput.verify")} />}
                        </View>
                    </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordInputCode;
