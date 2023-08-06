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
    hotelAddress: { fontSize: 15, marginBottom: 10, color: 'grey' },
    hotelStatus: { fontSize: 15, backgroundColor: '#E3F6EB', color: ColorAssets.greenColor, fontWeight: 'bold', width: '60%', paddingHorizontal: 15, paddingVertical: 3, borderRadius: 6 },
    hr:{ backgroundColor: '#EEEEEE', height: 1, marginBottom: 20, marginHorizontal: 20 },
    boxBottom:{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' },
    btnCancel:{ width: '48%', paddingVertical: 8, borderColor: ColorAssets.greenColor, borderRadius: 50, borderWidth: 2 },
    btnView:{ backgroundColor: ColorAssets.greenColor, width: '48%', paddingVertical: 8, justifyContent: 'center', borderRadius: 50 },
    textCancel:{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: ColorAssets.greenColor },
    textView:{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'white' }
})
