import { StyleSheet, Text, View } from 'react-native'
import { ColorAssets } from '../../utils/app-assets';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        justifyContent: 'space-between'
    },
    header: {
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
    viewOptions: {
        flexGrow: 1,
        marginBottom: 15,
        marginTop: 25,
        height: 46,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemOptions: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 2,
        color: "white",
        width: '31%'
    },
    itemOptions_noActive: {
        backgroundColor: "white",
        borderColor: ColorAssets.greenColor,
    },

    itemOptions_isActive: {
        backgroundColor: ColorAssets.greenColor,
        borderColor: ColorAssets.greenColor,
    },
    // Modal
    boxModal: { backgroundColor: 'white', paddingTop: 12, paddingHorizontal: 12, borderTopRightRadius: 20, borderTopLeftRadius: 20, minHeight: 330, paddingBottom: 20 },
    topModal:{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
    iconBar:{ width: 50, height: 5, backgroundColor: '#E0E0E0', borderRadius: 3 },
    titleModal:{ fontSize: 24, fontWeight: 'bold', color: '#F75555', marginVertical: 20 },
    hrModal:{ backgroundColor: '#F5F5F5', height: 1, marginBottom: 20, marginHorizontal: 10, width: '100%' },
    text1Modal:{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    text2Modal:{ fontSize: 14.5, textAlign: 'center', color: 'grey', marginBottom: 25 },
    bottomModal:{ flexDirection: 'row', justifyContent: 'space-between' },
    btnCancelModal:{ width: '48%', paddingVertical: 15, borderRadius: 50, backgroundColor: '#E3F6EB' },
    textCancelModal:{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: ColorAssets.greenColor },
    btnContinueModal:{ backgroundColor: ColorAssets.greenColor, width: '48%', paddingVertical: 15, justifyContent: 'center', borderRadius: 50 },
    textContinueModal:{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'white' },
    //---------------------------------------------------------------
    //payScreen
    container: {
        backgroundColor: ColorAssets.whiteColor,
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flex: 1
    },
    content: {
        alignItems: "center",
        paddingTop: 25,
        paddingHorizontal: 15,
    },
    shadowBox: {
        borderColor: 'grey',
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    boxTextPay:{ flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' },
    textPaid:{ fontSize: 16, marginRight: 10 },
    textRefund:{ fontSize: 16, fontWeight: 'bold' },
    footer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    boxMethodItem:{ flexDirection: 'row', marginHorizontal: 20, padding: 20, borderRadius: 20, alignItems: 'center' },
    imageMethod:{ height: 30, width: 30 },
    textMethod:{ fontSize: 16, fontWeight: 'bold', marginLeft: 20 },
    statusMethod:{ borderColor: ColorAssets.greenColor, borderRadius: 10, borderWidth: 2, padding: 2 },
    //modal
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btngohome: {
        backgroundColor: ColorAssets.greenColor,
        width: '100%',
        borderRadius: 100,
        marginTop: 20
    },
    textgohome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 15
    }
})

export default styles;