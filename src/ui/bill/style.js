import { Platform, StyleSheet, Text, View } from "react-native";
import { ColorAssets } from "../../utils/app-assets";
const styles = StyleSheet.create({
    boxHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, backgroundColor: ColorAssets.greenColor },
    textHeader: { fontSize: 20, fontWeight: 'bold', marginLeft: 8, color: 'white' },
    img1:{ height: 100, width: 100, borderRadius: 10, marginHorizontal: 15 },
    box1:{ backgroundColor: 'white', paddingVertical: 15 },
    viewBox1:{ backgroundColor: ColorAssets.greenColor, padding: 5, borderRadius: 5 },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    hr:{ height: 1, backgroundColor: '#ccc', marginVertical: 15, marginHorizontal: 20 },

})
export default styles