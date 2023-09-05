import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { ColorAssets, IconAssets, ImageAssets } from "../../utils/app-assets";
import { arrOptions, arrFakeData } from "./fakeData";
import {
  RenderItemListHorizontal,
  RenderItemListVertical,
} from "../../common/renderList";
import Icon from "react-native-vector-icons/FontAwesome";

import BookMark from "../../../assets/icons/Bookmark.svg";
import Notification from "../../../assets/icons/Notification.svg";
import Search from "../../../assets/icons/search.svg";
import AnimatedGradient from "../../common/custom/custom-imgloading";
import { useEffect } from "react";
import { handleGetHotel } from "../../api/hotel/hotel-service";
import SharedPreferences from "../../database/share_preferences_helper";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = (props) => {
  //animation header
  const scrollAnimationHeader = new Animated.Value(0)
  const diffClamp = Animated.diffClamp(scrollAnimationHeader, 0, 100)
  const translateMyY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100]
  })

  const opacityButton = new Animated.Value(0)
  const diffClampButton = Animated.diffClamp(opacityButton, 0, 1)
  const translateButton = diffClampButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  //giang giang
  const [indexOptions, setindexOptions] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [listHotel, setListHotel] = useState([]);
  const [fullName, setFullName] = useState(""); // State to store the full name

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
  const getUserInfor = () => {
    SharedPreferences.GET_USER_INFOR()
      .then((userInfoString) => {
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          setFullName(userInfo.fullName);
        } else {
          console.log("User information not found.");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user information:", error);
      });
  };

  useEffect(() => {
    callDataHotel();
    getUserInfor();
  }, []);
  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const threshold = 0.2 * screenHeight;


    if (scrollY >= threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollY < threshold && isScrolled) {
      setIsScrolled(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*Header */}
      <Animated.View style={{ transform: [{ translateY: translateMyY }], elevation: 4, zIndex: 10 }}>
        <View style={[styles.header, { position: 'absolute', top: 0, left: 0, right: 0, height: 60, backgroundColor: 'white' }]}>
          <View style={styles.viewHeaderItemLeft}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameLogoApp}>
              {isScrolled
                ? `Hello, ${fullName.split(" ").at(2)} 👋`
                : "Itinerary"}
            </Text>
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
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={(event) => {
          handleScroll(event)
          scrollAnimationHeader.setValue(event.nativeEvent.contentOffset.y)
          props.statusBottom(event.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}
      >
        {/*Search Bar*/}
        <View style={styles.searchBar}>
          <Text style={styles.textWelcome}>
            Hello, {fullName.split(" ").at(2)} 👋
          </Text>
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
            keyExtractor={(item) => item._id}
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
      </ScrollView>
      {isScrolled ? (
        <Animated.View style={{opacity: translateButton}}>
          <TouchableOpacity
            style={[styles.fab]}
            onPress={() => props.navigation.navigate("AddHotelScreen")}
          // test
          // onPress={() => props.navigation.navigate("TypeOfRoom")}
          >
            <Icon name="plus" size={18} color={ColorAssets.whiteColor} />
          </TouchableOpacity>
        </Animated.View>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
