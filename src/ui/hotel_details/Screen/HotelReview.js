
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import HeaderCustom from "../../../common/HeaderCustom";
import ListVote from "../components/ListVote";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import styles from './styles';
var { width } = Dimensions.get("window");

const HotelReviewScreen = (props) => {
    const { navigation } = props;
    const list = [
        "ALL", 5, 4, 3, 2, 1
    ]
    const [selected, setSelected] = useState("ALL");
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.HotelReviewScreen_marginTop}>
                <View style={{ flexDirection: 'row' ,marginBottom:30}}>
                    {list.map((item, index) => {
                        return (<TouchableOpacity key={index} style={item == selected ? styles.HotelReviewScreen_voteTrue : styles.HotelReviewScreen_voteFalse} onPress={() => {
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

export default HotelReviewScreen;
