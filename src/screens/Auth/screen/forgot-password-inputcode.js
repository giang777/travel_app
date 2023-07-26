import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorAssets } from "../../../utils/app-assets";
import AppBar from "../../../components/custom-appbar";
import { CustomButton, CustomHideButton } from '../../../components/custom-button';
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
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <AppBar onPress={() => navigation.goBack()} />
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 16 }}>Code has been send to ....</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}>
                            {inputRefs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <TextInput textAlign='center'
                                        ref={item}
                                        maxLength={1}
                                        autoFocus={index == 0 ? true : false}
                                        keyboardType='numeric'
                                        style={[styles.textNumber, focusedIndex == index ? styles.focus : styles.unFocus]}
                                        onFocus={() => { setFocusedIndex(index) }}
                                        onChangeText={(text) => { handleCodeChange(text, index) }} />
                                    {index !== inputRefs.length - 1 && <View style={{ width: '5%' }}></View>}
                                </React.Fragment>
                            ))}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15 }}>Resend code in </Text>
                            <Text style={{ fontSize: 15, color: ColorAssets.greenColor }}>55</Text>
                            <Text style={{ fontSize: 15 }}> s</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        {checkButtonShow ? <CustomButton
                            title="Verify"
                            onPress={() => { navigation.navigate("CreateNewPassword"); }}
                        /> : <CustomHideButton title={"Verify"} />}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordInputCode;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        backgroundColor: ColorAssets.whiteColor,
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        alignItems: "center",
        paddingHorizontal: 15,
        flexGrow: 1,
        paddingVertical: '55%',
    },
    footer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    unFocus: {
        backgroundColor: '#FAFAFA',
        borderColor: '#EEEEEE',
    },
    focus: {
        backgroundColor: '#EDFAF2',
        borderColor: '#51C783',
    },
    textNumber: {
        fontSize: 30,
        height: 55,
        width: '18%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10, fontWeight: 'bold'
    },
});
