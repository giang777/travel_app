import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ColorAssets } from "../../utils/app-assets";

const styles = StyleSheet.create({
  nameApp: {
    fontSize: 18,
    fontWeight: "800",
  },

  viewItemHorizontal: {
    flex: 1,
    width: 280,
    height: 380,
    resizeMode: "cover",
  },

  viewBackgroundImage: {
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 25,
    marginVertical: 20,
  },

  viewRateItemHoriontal: {
    width: "30%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 15,
    zIndex: 1,
    backgroundColor: ColorAssets.greenColor,
    borderRadius: 20,
  },

  informationItemHorizontal: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingBottom: 10,
    zIndex: 1,
    paddingStart: 15,
  },
  backgroundLayer: {
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: ColorAssets.blackolor,
    backgroundColor: "rgba(0, 0, 0, 0.35)", // Adjust the background color and opacity as needed
    zIndex: 0,
  },

  nameItemHorizontal: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  priceItemHorizontal: {
    fontSize: 21,
    fontWeight: "700",
    color: ColorAssets.whiteColor,
  },

  addressItemHorizontal: {
    fontSize: 14,
    color: "white",
    marginVertical: 5,
  },

  footerItemHorizontal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewContainerItemVertical: {
    marginHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: ColorAssets.whiteColor,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    elevation: 4,
  },

  imgItemVertical: {
    flex: 2.5,
    height: 90,
    borderRadius: 20,
    marginRight: 10,
  },

  viewContentItemVertical: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  viewEndItemVertical: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default styles;
