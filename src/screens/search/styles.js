import { StyleSheet, Text, View } from 'react-native'
import {ColorAssets} from "../../utils/app-assets";

const styles = StyleSheet.create({
    container: {
        flex: 1,


        backgroundColor: "#FAFAFA",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
   
    searchBar: {   


        width:"100%",
        height:48,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#dedede',
        backgroundColor: '#dedede',
        padding: 5,
    },
    optionView:{
       
        width:"100%",
        flexDirection: 'row',
        height:40

    },

    input: {
        flex: 1,
        padding: 5,
    },
    // focusedBorder: {
    //     borderColor: 'blue', // Đổi màu ở đây nếu bạn muốn màu khác
    // },
    iconButton: {
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    viewOptions: {
        flexDirection: "row",
       marginTop: 10,

    },
    itemOptions: {
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 1,
        marginRight: 10,
        color: "white"
    },

    itemOptions_noActive: {
        backgroundColor: "white",
        borderColor: ColorAssets.greenColor,
    },

    itemOptions_isActive: {
        backgroundColor: ColorAssets.greenColor,
        borderColor: ColorAssets.greenColor,
    },

    ViewOP: {
      width:"100%",
        height:50,
        marginVertical:10
    },
    header: {
        marginTop :44,
        marginBottom:20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    viewHeaderItem: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    logoApp: {
        width: 30,
        height: 30,
    },
    nameApp: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10
    },
    modal: {

        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        height:700,
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    slider: {
        width: '100%',
        height: 40,
        marginTop: 8,
    },
    ViewFilter:{
        width:'100%',
        height:55,


    },
    ViewCB:{
        width:'100%',
        height:50,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    labelcb: {
        fontSize: 16,
        marginLeft: 8,
    },

})

export default styles;