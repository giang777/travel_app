import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorAssets } from '../../utils/app-assets'

const styles = StyleSheet.create({


    nameApp: {
        fontSize: 15,
        fontWeight: "500",
    },


    viewItemHorizontal: {
        flex: 1,
        width: 160,
        height: 200,
        resizeMode: 'cover',
    },

    viewBackgroundImage:{
        flex: 1,
        borderRadius:20,
        overflow:"hidden",
        marginRight: 20,
        marginVertical: 20,
    },

    viewRateItemHoriontal:{
        width:"35%",
        height:"15%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:20,
        right:10,
        backgroundColor:"#32CD32",
        borderRadius:20,
    },

    informationItemHorizontal:{
        width:"100%",
        position:"absolute",
        bottom:10,
        left:10,
    },

    nameItemHorizontal:{
        fontSize:20,
        fontWeight:"700",
        color:"white",
    },

    addressItemHorizontal:{
        fontSize:15,
        color:"white",
    },

    footerItemHorizontal:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },

    viewContainerItemVertical:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        backgroundColor:ColorAssets.whiteColor,
        borderRadius:20,
        padding:20,
        marginVertical:10,
    },

    imgItemVertical:{
        flex:2.5,
        height:90,
        borderRadius:20,
        marginRight:10,
    },

    viewContentItemVertical:{
        flex:6,
        flexDirection:"column",
        justifyContent:"space-between",
    },

    viewEndItemVertical:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
    }



})

export default styles

