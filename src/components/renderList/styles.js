import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorAssets } from '../../utils/app-assets'

const styles = StyleSheet.create({


    nameApp: {
        fontSize: 22,
        fontWeight: "700",
    },


    viewItemHorizontal: {
        flex: 1,
        width: 260,
        height: 310,
        resizeMode: 'cover',
    },

    viewBackgroundImage:{
        flex: 1,
        borderRadius:20,
        overflow:"hidden",
        marginRight: 20,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
    },

    viewRateItemHoriontal:{
        paddingHorizontal: 20,
        paddingVertical: 6,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:20,
        right:20,
        backgroundColor:"#32CD32",
        borderRadius:20,
    },

    informationItemHorizontal:{
        width:"93%",
        position:"absolute",
        bottom:10,
        left:10,
        paddingLeft: 5
    },

    nameItemHorizontal:{
        fontSize:25,
        fontWeight:"700",
        color:"white",
    },

    addressItemHorizontal:{
        fontSize:16,
        color:"white",
    },

    footerItemHorizontal:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },

    viewContainerItemVertical:{
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:ColorAssets.whiteColor,
        borderRadius:20,
        padding:20,
        marginVertical:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
    },

    imgItemVertical:{
        width: 110,
        height:110,
        borderRadius:20,
        marginRight:20,
    },

    viewContentItemVertical:{
        flexDirection:"column",
        justifyContent:"space-between",
        paddingVertical: 8
    },

    viewEndItemVertical:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        flexDirection: 'row',
    }



})

export default styles

