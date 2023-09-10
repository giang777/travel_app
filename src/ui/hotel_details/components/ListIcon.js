
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import styles from './styles';

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
        <View  style={styles.listIcon_flex}>
            {list.map((item, index) => {
                return (<View key={index} style={styles.listIcon_item}>
                    <Image  style={styles.listIcon_imageBanner} source={{ uri: item.image ? item.image : 'https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png' }} />
                    <Text>{item.name}</Text>
                </View>)
            })}
        </View>
    );
};


export default ListIcon;
