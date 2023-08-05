import { StyleSheet, Text, View } from 'react-native'

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
       marginTop: 10
    },
    ViewOP: {
      width:"100%",
        height:50,
        marginVertical:10
    },
    header: {
        marginTop :45,
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
})

export default styles;