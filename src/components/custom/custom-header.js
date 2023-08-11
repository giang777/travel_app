import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderNavigation = (props) => {
    const { titel, arrIcon, onBack } = props;//truyền icon vào đây (Mảng), sự kiện nút back , tiêu đề vào đây
    return (
        <View style={styles.container}>
            <View style={{ flex: 9, flexDirection: "row" }}>
                <TouchableOpacity onPress={onBack}>
                    <Icon name='arrow-back' size={30} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.titel}>{titel}</Text>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
                {
                    arrIcon.map((item,index)=>{
                        return(
                            <TouchableOpacity key={index} onPress={item.onPress} style={{marginRight:10}}>
                                {item.icon}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default HeaderNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    titel: {
        fontSize: 25,
        fontWeight: "600",
        marginLeft: 10,
    }
})