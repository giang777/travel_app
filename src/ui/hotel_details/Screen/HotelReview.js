
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../common/HeaderCustom";
import Maps from "../Map";
import ListVote from "../ListVote";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

var { width } = Dimensions.get("window");

const HotelReviewScreen = (props) => {
    const { navigation } = props;
    const list = [
        "ALL", 5, 4, 3, 2, 1
    ]
    const [selected, setSelected] = useState("ALL");
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.marginTop}>
                <View style={{ flexDirection: 'row' ,marginBottom:30}}>
                    {list.map((item, index) => {
                        return (<TouchableOpacity key={index} style={item == selected ? styles.voteTrue : styles.voteFalse} onPress={() => {
                            setSelected(item);
                        }}>
                            <FontAwesome name="star" size={20} color={item == selected ? 'white':'#14aa14'} />
                            <Text style={{ color: item == selected ? 'white':'#14aa14' }}>{item}</Text>
                        </TouchableOpacity>);
                    })}
                </View>
                <ListVote></ListVote>
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
        marginTop: 80
    },
    marginTop: { marginTop: 100 },
    voteFalse: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.2,
        marginLeft: 10
    },
    voteTrue: {
        backgroundColor: '#14aa14',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.2,
        marginLeft: 10
    },
    vote: {
        color: '#14aa14',
        borderColor: '#14aa14'
    }
});

export default HotelReviewScreen;
