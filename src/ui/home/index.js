import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { ColorAssets, IconAssets, ImageAssets } from "../../utils/app-assets";
import { arrOptions, arrFakeData } from "./fakeData";
import {
  RenderItemListHorizontal,
  RenderItemListVertical,
} from "../../common/renderList";
import { StatusBar } from "expo-status-bar";
import BookMark from "../../../assets/icons/Bookmark.svg";
import Notification from "../../../assets/icons/Notification.svg";
import Search from "../../../assets/icons/search.svg";
import MyFloatingActionButton from "../../common/custom/custom-fab";
import CustomBottomSheet from "../../common/custom/app-bottom-sheet";
import AnimatedGradient from "../../common/custom/custom-imgloading";
import { useEffect } from "react";
import { handleGetHotel } from "../../api/hotel/hotel-service";
const HomeScreen = (props) => {
  //giang giang
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [indexOptions, setindexOptions] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [listHotel, setListHotel] = useState([]);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  const callDataHotel = async () => {
    try {
      const response = await handleGetHotel();
      if (response.data) {
        setListHotel(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callDataHotel();
  }, []);
  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const threshold = 0.24 * screenHeight;
    if (scrollY >= threshold && !isScrolled) {
      setIsScrolled(true);
      console.log("Scrolled: 24%");
    } else if (scrollY < threshold && isScrolled) {
      setIsScrolled(false);
    }
  };
  return (


    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom:20,borderBottomEndRadius:isScrolled ? 30 : 0}}>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItemLeft}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameLogoApp}>Itinerary</Text>
          </View>
          <View style={styles.viewHeaderItemRight}>
            <TouchableOpacity>
              <Notification color={ColorAssets.greyColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <BookMark color={ColorAssets.greyColor} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Search Bar*/}
        <View style={styles.searchBar}>
          <Text style={styles.textWelcome}>Hello, Giang 👋</Text>
          <View style={styles.viewSearch}>
            <Search color={ColorAssets.greyColor} size={20} />
            <TextInput
              placeholder="Search"
              maxLength={225}
              numberOfLines={1}
              style={{ width: "100%", paddingHorizontal: 10, paddingEnd: 15 }}
            />
          </View>
        </View>

        {/*Options*/}
        <ScrollView
          horizontal={true}
          style={styles.viewOptions}
          showsHorizontalScrollIndicator={false}
        >
          {arrOptions.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.itemOptions,
                  indexOptions === item.id
                    ? styles.itemOptions_isActive
                    : styles.itemOptions_noActive,
                ]}
                onPress={() => {
                  setindexOptions(item.id);
                }}
                key={index}
              >
                <Text
                  style={[
                    { fontWeight: "bold", fontSize: 16 },
                    indexOptions === item.id
                      ? { color: "white" }
                      : { color: ColorAssets.greenColor },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {/*Contents*/}
        {listHotel.length == 0 ? (
          <FlatList
            horizontal
            style={styles.content}
            data={arrFakeData}
            renderItem={({ item }) => <AnimatedGradient typeLoad={1} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            horizontal
            style={styles.content}
            data={listHotel}
            renderItem={({ item }) => (
              <RenderItemListHorizontal item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}

        {/*Booked*/}
        <View style={styles.headerBooked}>
          <Text style={styles.nameApp}>Recently Booked</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("RecentlyBookedScreen");
            }}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          {listHotel.length == 0
            ? arrFakeData.map((item, index) => {
              return <AnimatedGradient key={index} typeLoad={2} />;
            })
            : arrFakeData.map((item, index) => {
              return <RenderItemListVertical key={index} item={item} />;
            })}
        </View>

        {
          isScrolled ? (
            <View style={styles.fabContainer}>
              <MyFloatingActionButton onPress={openBottomSheet} />
              {bottomSheetVisible && (
                <CustomBottomSheet
                  isVisible={bottomSheetVisible}
                  onCancel={closeBottomSheet}
                />
              )}
            </View>
          ) : null
        }

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
