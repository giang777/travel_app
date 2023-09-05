import { StyleSheet} from 'react-native'
import { ColorAssets } from "../../utils/app-assets";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:ColorAssets.whiteColor
      },
     
      header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      },
    
      viewHeaderItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      },
      logoApp: {
        width: 30,
        height: 30,
      },
      nameApp: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10,
      },

      textAddroom: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        color:ColorAssets.greenColor
      },

      viewOptions: {
        flexGrow: 1,
        marginBottom: 15,
        marginTop: 25,
        height: 46,
        flexDirection: "row",
        justifyContent: "space-between",
      },
    
      itemOptions: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 2,
        color: "white",
        width: "31%",
      },
      itemOptions_noActive: {
        backgroundColor: "white",
        borderColor: ColorAssets.greenColor,
      },
    
      itemOptions_isActive: {
        backgroundColor: ColorAssets.greenColor,
        borderColor: ColorAssets.greenColor,
      },
})

export default styles;