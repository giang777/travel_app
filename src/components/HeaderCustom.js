import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get('window');
const HeaderCustom = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {
                props.navigation.goBack()
            }}>
                <AntdesignIcon style={styles.left} name='arrowleft' size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.right}>
                <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white" />
                <Ionicons name="ellipsis-horizontal-circle" size={30} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-around",
        position: "absolute",
        top: 20,
        marginTop: "10%"
    },
    left: {
        left: -30
    },
    right: {
        right: -50,
        justifyContent: "space-around",
        flexDirection: 'row',
        width: "30%",
    }
})

export default HeaderCustom;