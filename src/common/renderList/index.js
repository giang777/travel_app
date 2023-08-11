import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { ColorAssets } from "../../utils/app-assets";
import Icon from "react-native-vector-icons/MaterialIcons";
import WhiteBookmark from "../../../assets/icons/WhiteBookmark.svg";
import AddBookmark from "../../../assets/icons/AddBookmark.svg";
const RenderItemListHorizontal = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={styles.viewBackgroundImage}>
      <ImageBackground
        source={{ uri: item.uri }}
        style={styles.viewItemHorizontal}
      >
        <View style={styles.viewRateItemHoriontal}>
          <Icon
            name="star"
            size={19}
            style={{ marginRight: 8 }}
            color={ColorAssets.whiteColor}
          />
          <Text style={{ color: ColorAssets.whiteColor }}>{item.rate}</Text>
        </View>
        <View style={styles.backgroundLayer} />
        <View style={styles.informationItemHorizontal}>
          <Text style={styles.nameItemHorizontal}>{item.name}</Text>
          <Text style={styles.addressItemHorizontal}>{item.address}</Text>
          <View style={styles.footerItemHorizontal}>
            <Text style={styles.priceItemHorizontal}>${item.price}</Text>
            <TouchableOpacity style={{ marginRight: 15 }}>
              <WhiteBookmark  width={30} height={30} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const RenderItemListVertical = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={styles.viewContainerItemVertical}>
      <Image source={{ uri: item.uri }} style={styles.imgItemVertical} />
      <View style={styles.viewContentItemVertical}>
        <Text style={styles.nameApp}>{item.name}</Text>
        <Text>{item.address}</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={18} color={"yellow"} />
          <Text style={{ color: ColorAssets.greenColor, marginLeft: 5}}>
            {item.rate}
          </Text>
        </View>
      </View>
      <View style={styles.viewEndItemVertical}>
        <Text style={[styles.nameApp, { color: ColorAssets.greenColor}]}>
          ${item.price}
        </Text>
        <AddBookmark  width={25} height={25} />
      </View>
    </TouchableOpacity>
  );
};

export { RenderItemListHorizontal, RenderItemListVertical };
