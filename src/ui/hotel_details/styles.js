import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
   Bottom: {
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    Top: {
        position: 'absolute', left: 0, right: 0, top: 0,
    },
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
    flexCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    more: {
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
    },
    buttonMore: {
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: '#cae0d4',
        borderRadius: 20,
    },

    banner_container: {
        flex: 1,
      },
      banner_swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
      },
      banner_imageBanner: {
        height: width * 0.7,
        width: width,
        borderRadius: 1,
        backgroundColor: '#2b2424',
      },

    bottom_price: {
        color: '#1ab65c', 
        fontSize: 26, 
        fontWeight: "bold"
    },
    bottom_normal: {
        color: '#5b655f', 
        fontSize: 20, 
        fontWeight: "normal",
    },
    bottom_item: {
        width: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom_flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        padding:15,
        paddingTop:20,
    },
    bottom_border:{
        borderWidth:2,
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        borderColor:'#e1e1e1'
    },
    bottom_booking: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 17,
    },
    bottom_button: {
        alignItems: 'center',
        width: width * 0.5,
        backgroundColor: '#1ab65c',
        borderRadius: 20
    },
    bottom_align:{
        justifyContent:'space-between',
        alignContent:'space-around'
    }
})

export default styles;