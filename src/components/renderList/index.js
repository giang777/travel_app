import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { ColorAssets, IconAssets, ImageAssets } from '../../utils/app-assets';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RenderItemListHorizontal = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity style={styles.viewBackgroundImage}>
            <ImageBackground source={{ uri: item.uri }} style={styles.viewItemHorizontal}>
                <View style={styles.viewRateItemHoriontal}>
                    <Icon name='star' size={15} color={ColorAssets.whiteColor} />
                    <Text style={{ color: ColorAssets.whiteColor, marginLeft: 10, fontSize: 16 }}>{item.rate}</Text>
                </View>

                <View style={styles.informationItemHorizontal}>
                    <Text style={styles.nameItemHorizontal}>{item.name}</Text>
                    <Text style={styles.addressItemHorizontal}>{item.address}</Text>
                    <View style={styles.footerItemHorizontal}>
                        <Text style={styles.nameItemHorizontal}>${item.price}</Text>
                        <TouchableOpacity>
                            <Icon name='bookmark' size={30} color={ColorAssets.whiteColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const RenderItemListVertical = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity style={styles.viewContainerItemVertical}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.uri }} style={styles.imgItemVertical} />
                <View style={styles.viewContentItemVertical}>
                    <Text style={styles.nameApp}>{item.name}</Text>
                    <Text style={{ fontSize: 16 }}>{item.address}</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Icon name='star' size={16} color={'yellow'} />
                        <Text style={{ color: '#32CD32', marginLeft: 5, fontWeight: "700", fontSize: 16 }}>{item.rate}</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 1, flex: 1, backgroundColor: '#F5F5F5', marginVertical: 15 }}></View>
            <View style={styles.viewEndItemVertical}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ color: "#32CD32", fontWeight: "700", fontSize: 22 }}>{item.price} </Text>
                    <Text style={{fontWeight: '700',color: "#32CD32",fontSize: 18}}>₫</Text>
                </View>
                <Icon name='bookmark' size={25} color={'black'} />
            </View>
        </TouchableOpacity>
    )
}

export { RenderItemListHorizontal, RenderItemListVertical }