import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../components/HeaderCustom";

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
                <View style={styles.flex}>
                    {list.map((item, index) => {
                        return (<View key={index} style={styles.item}>
                            <Image resizeMode={"cover"} style={styles.imageBanner} source={{ uri: item ? item : 'https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png' }} />
                        </View>)
                    })}
                </View>
            </ScrollView>
            <HeaderCustom navigation={navigation} name="Galley Hotel Photos" icon={true} color="black"></HeaderCustom>
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

export default HotelPhotoScreen;
