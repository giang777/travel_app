import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text, TouchableOpacity } from "react-native";

var { width } = Dimensions.get("window");

const Bottom = (props) => {
    const { price } = props;
    return (
        <View style={[styles.flex,styles.align,styles.border]}>
            <View style={[styles.flex,styles.align]}>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.normal}>/night</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {

            }}>
                <Text style={styles.booking}>Book now !</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    price: {
        color: '#1ab65c', 
        fontSize: 26, 
        fontWeight: "bold"
    },
    normal: {
        color: '#5b655f', 
        fontSize: 20, 
        fontWeight: "normal",
    },
    item: {
        width: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        padding:15,
        paddingTop:20,
    },
    border:{
        borderWidth:2,
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        borderColor:'#e1e1e1'
    },
    booking: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 17,
    },
    button: {
        alignItems: 'center',
        width: width * 0.5,
        backgroundColor: '#1ab65c',
        borderRadius: 20
    },
    align:{
        justifyContent:'space-between',
        alignContent:'space-around'
    }
});

export default Bottom;
