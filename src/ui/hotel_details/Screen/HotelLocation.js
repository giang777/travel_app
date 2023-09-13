
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../common/HeaderCustom";
import Maps from "../components/Map";
import styles from './styles';
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

export default HotelLocationScreen;
