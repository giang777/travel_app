import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ColorAssets } from "../../utils/app-assets";
import { useDispatch, useSelector } from "react-redux";

export default function CustomSwitch({ onSwitch }) {
    const [selectedGender, setselectedGender] = useState(false)
    const setMale = () => {
        setselectedGender(false);
    }
    const setFemale = () => {
        setselectedGender(true);
    }
    useEffect(() => {
        onSwitch(selectedGender)
    },[selectedGender])

    return (
        <View style={styles.boxSwitch}>
            <TouchableOpacity style={[styles.btnGender, { backgroundColor: selectedGender ? ColorAssets.greyColor200 : ColorAssets.greenColor }]} onPress={setMale}>
                <Text style={[styles.textBtn, { color: selectedGender ? 'gray' : ColorAssets.whiteColor }]}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnGender, { backgroundColor: selectedGender ? ColorAssets.greenColor : ColorAssets.greyColor200 }]} onPress={setFemale}>
                <Text style={[styles.textBtn, { color: selectedGender ? ColorAssets.whiteColor : 'gray' }]}>Female</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    boxSwitch: {
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: ColorAssets.greyColor200,
    },
    btnGender: {
        width: '50%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 16,
        fontWeight: '700'
    },
})