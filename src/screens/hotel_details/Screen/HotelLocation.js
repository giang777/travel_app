import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../components/HeaderCustom";
import Maps from "../Map";

var { width } = Dimensions.get("window");

const HotelLocationScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Maps isSmall={true}></Maps>
            </ScrollView>
            <HeaderCustom navigation={navigation} name="Galley Hotel Photos" circle={true} icon={true} color="black"></HeaderCustom>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBanner: {
        height: width * 0.4,
        width: width * 0.4,
        borderWidth: 2,
        borderRadius: 10
    },
    item: {
        width: width * 0.4,
        margin: width * 0.05
    },
    flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:80
    },
});

export default HotelLocationScreen;
