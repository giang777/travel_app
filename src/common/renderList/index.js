import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ColorAssets } from "../../utils/app-assets";
import Icon from "react-native-vector-icons/MaterialIcons";
import WhiteBookmark from "../../../assets/icons/WhiteBookmark.svg";
import AddBookmark from "../../../assets/icons/AddBookmark.svg";
import BookMark from "../../../assets/icons/Bookmark.svg";
const RenderItemListHorizontal = ({item,onPressed}) => {
  const [isSaveBookmark, setIsSaveBookmark] = useState(false);
  const handleSetBookmark = () =>
    setIsSaveBookmark((prevIsSaveBookmark) => !prevIsSaveBookmark);
  const imageUri = `http://103.122.163.148:3000/${item.images[0]}`;
  const modifiedImageUri = imageUri.replace("public/", "");
  return (
    <TouchableOpacity style={styles.viewBackgroundImage} onPress={onPressed}>
      <ImageBackground
        source={{ uri: modifiedImageUri }}
        style={styles.viewItemHorizontal}
      >
        {item.rate ? (
          <View style={styles.viewRateItemHoriontal}>
            <Icon
              name="star"
              size={19}
              style={{ marginRight: 8 }}
              color={ColorAssets.whiteColor}
            />

            <Text style={{ color: ColorAssets.whiteColor }}>
              {/* {parseFloat(item.rate.toString()).toFixed(1)} */}
              {/* {parseFloat('4.22222').toFixed(1)} */}
            </Text>
          </View>
        ) : (
          <View></View>
        )}

        <View style={styles.backgroundLayer} />
        <View style={styles.informationItemHorizontal}>
          <Text style={styles.nameItemHorizontal}>{item.name}</Text>
          <Text style={styles.addressItemHorizontal}>{item.address}</Text>
          <View style={styles.footerItemHorizontal}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.priceItemHorizontal}>${item.price}</Text>
              <Text style={styles.timeOut}>/per night</Text>
            </View>

            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={handleSetBookmark}
            >
              {isSaveBookmark ? (
                <AddBookmark width={30} height={30} />
              ) : (
                <WhiteBookmark width={30} height={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const RenderItemListVertical = ({item,onPressed}) => {
  return (
    <TouchableOpacity style={styles.viewContainerItemVertical} onPress={onPressed}>
      <Image source={{ uri: item.uri }} style={styles.imgItemVertical} />
      <View style={styles.viewContentItemVertical}>
        <Text style={styles.nameApp}>{item.name}</Text>
        <Text>{item.address}</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={18} color={"#FFDB35"} />
          <Text
            style={{
              color: ColorAssets.greenColor,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            {/* {parseFloat(item.rate.toString()).toFixed(1)} */}
            {parseFloat("4.22222").toFixed(1)}
          </Text>
        </View>
      </View>
      <View style={styles.viewEndItemVertical}>
        <Text style={styles.nameApp}>${item.price}</Text>
        <TouchableOpacity>
          <AddBookmark width={25} height={25} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export { RenderItemListHorizontal, RenderItemListVertical };
