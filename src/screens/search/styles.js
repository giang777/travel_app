import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20
    },
   
    searchBar: {   

        marginTop:50,
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
})

export default styles;