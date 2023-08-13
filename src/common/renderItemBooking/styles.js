import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorAssets } from '../../utils/app-assets'
export default styles = StyleSheet.create({
    boxItem: {
        width: '100%',
        borderColor: 'grey',
        paddingBottom: 20,
        backgroundColor: 'white',
        marginBottom: 20,
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
    boxTop: {
        flexDirection: 'row',
        padding: 20
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 20
    },
    hotelName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
   
    borderStatusOngoing: { borderRadius: 6, backgroundColor: '#E3F6EB', width: '60%', justifyContent: 'center', alignItems: 'center' },
    hotelAddress: { fontSize: 15, marginBottom: 10, color: 'grey' },
    hotelStatus: { fontSize: 15, color: ColorAssets.greenColor, fontWeight: '500', paddingHorizontal: 15, paddingVertical: 5 },
    hr: { backgroundColor: '#ccc', height: 1, marginBottom: 20, marginHorizontal: 20 },
    boxBottom: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' },
    btnCancel: { width: '48%', paddingVertical: 8, borderColor: ColorAssets.greenColor, borderRadius: 50, borderWidth: 2 },
    btnView: { backgroundColor: ColorAssets.greenColor, width: '48%', paddingVertical: 8, justifyContent: 'center', borderRadius: 50 },
    textCancel: { textAlign: 'center', fontSize: 16, fontWeight: '500', color: ColorAssets.greenColor },
    textView: { textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'white' },


    // completed
    borderStatusCompleted: { borderRadius: 6, backgroundColor: '#E3F6EB' },
    boxBottomCompleted: {
        backgroundColor: '#E3F6EB',
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBottomCompleted: { marginLeft: 5, color: ColorAssets.greenColor },
    hotelStatusCompleted: { fontSize: 15, color: ColorAssets.greenColor, fontWeight: '500', paddingHorizontal: 15, paddingVertical: 5 },

    //canceled
    borderStatusCanceled: { borderRadius: 6, backgroundColor: '#FDDDDD' },
    boxBottomCanceled: {
        backgroundColor: '#FDDDDD',
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBottomCanceled: { marginLeft: 5, color: '#F75555' },
    hotelStatusCanceled: { fontSize: 15, color: '#F75555', fontWeight: '500', paddingHorizontal: 15, paddingVertical: 5 },
})
