import { StyleSheet, Dimensions, Text, View } from 'react-native'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20
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
        fontSize: 18,
        fontWeight: "500",
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
        height: windowHeight - 780,
        backgroundColor: "#DCDCDC",
        marginVertical: 10,
        borderRadius: 20,
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
        borderColor: "#32CD32",
    },

    itemOptions_isActive: {
        backgroundColor: "#32CD32",
        borderColor: "#32CD32",
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