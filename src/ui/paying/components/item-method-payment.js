import { Image,Text,View } from "react-native"
import { TouchableOpacity } from "react-native"
import { ColorAssets } from "../../../utils/app-assets"
import styles from "../../booking/styles"
export default ItemMethodPayment = ({ item, setItemChoose, isChose }) => {
    return (
        <TouchableOpacity style={[styles.boxMethodItem, styles.shadowBox]} onPress={() => { setItemChoose(item.id) }}>
            <Image style={styles.imageMethod} source={item.image} />
            <Text style={styles.textMethod}>{item.title}</Text>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                {isChose == item.id ? <View style={styles.statusMethod}>
                    <View style={{ height: 12, width: 12, backgroundColor: ColorAssets.greenColor, borderRadius: 10 }}>
                    </View>
                </View> : undefined}
            </View>
        </TouchableOpacity>
    )
}