
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles';


const ListVote = (props) => {
    const list = [
        { comment: "Andrew also points out how timing and seasonality play a much bigger role in travel and tourism marketing compared to other industries. For example, while consumer product goods and other retail marketers have a consistent, primary", name: "android", vote: 4, date: '2017-20', url: "https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180" },
        { comment: "Andrew also points out how timing and seasonality play a much bigger role in travel and tourism marketing compared to other industries. For example, while consumer product goods and other retail marketers have a consistent, primary", name: "android", vote: 4, date: '2017-20', url: "https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180" },
        { comment: "Andrew also points out how timing and seasonality play a much bigger role in travel and tourism marketing compared to other industries. For example, while consumer product goods and other retail marketers have a consistent, primary", name: "android", vote: 4, date: '2017-20', url: "https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180" },
        { comment: "Andrew also points out how timing and seasonality play a much bigger role in travel and tourism marketing compared to other industries. For example, while consumer product goods and other retail marketers have a consistent, primary", name: "android", vote: 4, date: '2017-20', url: "https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180" },
    ]
    return (
        <View>
            {list.map((item, index) => {
                return (
                    <View key={index} style={{backgroundColor:'#fffefe4d',padding: width * 0.05,marginBottom:10,borderRadius:10}}>
                        <View style={styles.listVote_item}>
                            <View style={styles.listVote_item}>
                                <Image resizeMode={"cover"} style={styles.listVote_imageBanner} source={{ uri: item ? item.url : 'https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png' }} />
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 15, fontWeight: '300', marginLeft: 10 }}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={styles.listVote_vote}>
                                <FontAwesome name="star" size={20} color='white' />
                                <Text style={{color:'white'}}>{item.vote}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 10 }}>{item.comment}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    );
};


export default ListVote