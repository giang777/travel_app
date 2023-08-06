import { StyleSheet, Dimensions, Text, View } from 'react-native'
import { ColorAssets } from '../../utils/app-assets';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
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

    searchBar: {
        width: "100%",
        marginVertical: 20,
    },

    textWelcome: {
        fontSize: 30,
        fontWeight: "700",
    },

    viewSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: 50,
        backgroundColor: "#DCDCDC",
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20,
    },

    viewOptions: {
        flexDirection: "row",
        marginVertical: 5,
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

    headerBooked:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
    },

    containerBooked:{
        flex:1,
        padding:10,
    },

})

export default styles;