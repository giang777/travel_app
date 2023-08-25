import { StyleSheet } from "react-native"
import { ColorAssets } from "../../utils/app-assets"
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorAssets.whiteColor,
      },
      topModal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      titleContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
      },
      titleModal: {
        fontSize: 21,
        fontWeight: "bold",
        color: ColorAssets.blackolor,
        marginVertical: 8,
      },
      hrModal: {
        backgroundColor: ColorAssets.greyColor200,
        height: 1,
        marginBottom: 20,
        width: "100%",
      },
      titleDone: {
        fontSize: 15,
        color: ColorAssets.blueColor,
        fontWeight: "600",
      },
      bodyModal: {
        paddingHorizontal: 10,
      },
      text1Modal: {
        fontSize: 15,
        width: "100%",
        fontWeight: "bold",
        textAlign: "left",
        paddingHorizontal: 10,
      },
      bottomModal: {
        marginTop: 10,
        paddingHorizontal: 10,
      },
      securityCommitmentMessage: {
        color: ColorAssets.greyColor,
        fontWeight: 400,
      },
})