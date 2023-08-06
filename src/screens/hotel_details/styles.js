import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    size20Bold: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    bold: {
        fontWeight: '600'
    },
    padding10: {
        padding: 10,
    },
    margin20: {
        margin: 20,
    },
    marginNullTop: {
        margin: 20,
        marginTop: -10,
    },
    marginB: {
        paddingBottom: 30,
    },
    size16Center: {
        fontSize: 16,
        justifyContent: 'center',
    },
    size25Bold: {
        fontSize: 25,
        fontWeight: '600'
    },
    flexAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        left: -7,
        marginBottom: 10,
    }, flexJustify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: -7,
        marginBottom: 10,
    }, hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }, green: {
        color: 'green',
    }, Bottom: {
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
        
    }
})

export default styles;