
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../common/HeaderCustom";
import styles from './styles';
var { width } = Dimensions.get("window");

const HotelPhotoScreen = (props) => {
    const { navigation } = props;
    const { gallery } = props.route.params;
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(gallery)
        console.log(gallery);
        return () => {
            setList([]);
        }
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.HotelPhotoScreen_flex}>
                    {list.map((item, index) => {
                        return (<View key={index} style={styles.HotelPhotoScreen_item}>
                            <Image resizeMode={"cover"} style={styles.HotelPhotoScreen_imageBanner} source={{ uri: item ? item : 'https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png' }} />
                        </View>)
                    })}
                </View>
            </ScrollView>
            <HeaderCustom navigation={navigation} name="Galley Hotel Photos" icon={true} color="black"></HeaderCustom>
        </View>
    );
};

export default HotelPhotoScreen;
