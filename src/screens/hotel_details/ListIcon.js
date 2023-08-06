
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";

var { width } = Dimensions.get("window");

const ListIcon = (props) => {
    const [list,setList]=useState([]);
    useEffect(() => {
        setList(props.list)
        return ()=>{
            setList([]);
        }
    },[])
    return (
        <View  style={styles.flex}>
            {list.map((item, index) => {
                return (<View key={index} style={styles.item}>
                    <Image  style={styles.imageBanner} source={{ uri: item.image ? item.image : 'https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png' }} />
                    <Text>{item.name}</Text>
                </View>)
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    imageBanner: {
        height: width * 0.1,
        width: width * 0.1,
    },
    item: {
        width:width*0.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    flex: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
});

export default ListIcon;
