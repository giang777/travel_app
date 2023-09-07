import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Slider,
} from "react-native";
import styles from "./styles";
import styleshome from "../home/styles";
import { arrOptions, arrFakeData } from "../home/fakeData";
import { RenderItemListVertical } from "../../common/renderList";
import { ColorAssets, IconAssets } from "../../utils/app-assets";
import Modal from "react-native-modal";
import {
  arrCity,
  arrResults,
  arrStar,
  optionsCheckBox,
} from "./fakedataSearch";
import { Ionicons } from "@expo/vector-icons";

import CheckBox from "react-native-check-box";
import { Checkbox } from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSizebox from "../../common/custom/custom-sizebox";
import Category from "../../../assets/icons/Category.svg";
import Document from "../../../assets/icons/document.svg";
import SelectedRecommend from "../../../assets/icons/selectRecommend.svg";


// searchbar
const SearchBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [indexOptionsCity, setindexOptionsCity] = useState(1);
  const [indexOptionsRs, setindexOptionsRs] = useState(1);
  const [indexOptionsSt, setindexOptionsSt] = useState(1);
  const [data1, setData1] = useState([
    { id: 1, label: "Option 1", isChecked: false },
    { id: 2, label: "Option 2", isChecked: false },
    { id: 3, label: "Option 3", isChecked: false },
    // Add more options as needed
  ]);
  const [data2, setData2] = useState([
    { id: 1, label: "Option 1", isChecked: false },
    { id: 2, label: "Option 2", isChecked: false },
    { id: 3, label: "Option 3", isChecked: false },
    // Add more options as needed
  ]);
  const toggleCheckbox1 = (itemId) => {
    setData1((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  const toggleCheckbox2 = (itemId) => {
    setData2((prevData) =>
        prevData.map((item) =>
            item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
        )
    );
  };
  const renderCheckboxItem1 = ({ item }) => (
    <View style={styles.checkboxContainer}>
      <Checkbox
        color={"#1AB65C"}
        value={item.isChecked}
        onValueChange={() => toggleCheckbox1(item.id)}
      />

      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
  const renderCheckboxItem2 = ({ item }) => (
      <View style={styles.checkboxContainer}>
        <Checkbox
            color={"#1AB65C"}
            value={item.isChecked}
            onValueChange={() => toggleCheckbox2(item.id)}
        />

        <Text style={styles.label}>{item.label}</Text>
      </View>
  );

  const [priceRange, setPriceRange] = useState([0, 100]); // Khoảng giá mặc định

  const onPriceRangeChange = (values) => {
    setPriceRange(values);
  };

  // const [priceRange, setPriceRange] = useState([0, 100]);
  //
  // const onPriceRangeChange = (values) => {
  //     setPriceRange(values);
  // };
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
      <TouchableOpacity style={styles.iconButton}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={toggleModal}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/3024/3024539.png",
          }}
        />
      </TouchableOpacity>
      {/*Bottom dialog*/}
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        backdropOpacity={0.5}
        onBackdropPress={toggleModal}
        swipeDirection={["down"]} // Có thể thay đổi hướng vuốt để đóng dialog
        onSwipeComplete={toggleModal}
      >
        <View style={styles.modalContent}>
          {/*Options*/}
          {/*Country*/}
          <Text style={styles.label}>Country</Text>
          <View style={styles.ViewFilter}>
            <ScrollView
              horizontal={true}
              style={styles.viewOptions}
              showsVerticalScrollIndicator={false}
            >
              {arrCity.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itemOptions,
                      indexOptionsCity === item.idcity
                        ? styles.itemOptions_isActive
                        : styles.itemOptions_noActive,
                    ]}
                    onPress={() => {
                      setindexOptionsCity(item.idcity);
                    }}
                    key={index}
                  >
                    <Text
                      style={[
                        { fontWeight: "bold", fontSize: 16 },
                        indexOptionsCity === item.idcity
                          ? { color: "white" }
                          : { color: ColorAssets.greenColor },
                      ]}
                    >
                      {item.city}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          {/*Results*/}
          <Text style={styles.label}>Results</Text>
          <View style={styles.ViewFilter}>
            <ScrollView
              horizontal={true}
              style={styles.viewOptions}
              showsVerticalScrollIndicator={false}
            >
              {arrResults.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itemOptions,
                      indexOptionsRs === item.idRs
                        ? styles.itemOptions_isActive
                        : styles.itemOptions_noActive,
                    ]}
                    onPress={() => {
                      setindexOptionsRs(item.idRs);
                    }}
                    key={index}
                  >
                    <Text
                      style={[
                        { fontWeight: "bold", fontSize: 16 },
                        indexOptionsRs === item.idRs
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
          {/*Star*/}
          <Text style={styles.label}>Star</Text>
          <View style={styles.ViewFilter}>
            <ScrollView
              horizontal={true}
              style={styles.viewOptions}
              showsVerticalScrollIndicator={false}
            >
              {arrStar.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itemOptions,
                      indexOptionsSt === item.id
                        ? styles.itemOptions_isActive
                        : styles.itemOptions_noActive,
                    ]}
                    onPress={() => {
                      setindexOptionsSt(item.id);
                    }}
                    key={index}
                  >
                    <Text
                      style={[
                        { fontWeight: "bold", fontSize: 16 },
                        indexOptionsSt === item.id
                          ? { color: "white" }
                          : { color: ColorAssets.greenColor },
                      ]}
                    >
                      {item.star}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/*slider*/}
          <Text style={styles.label}>Price Range:</Text>
          <Text>{`$${priceRange[0]} - $${priceRange[1]}`}</Text>


          {/*checkbox1*/}
          <Text style={styles.label}>Checkbox</Text>
          <View style={styles.ViewFilter}>
            {data1.map((item) => (
              <View key={item.id}>{renderCheckboxItem1({ item })}</View>
            ))}
          </View>
          {/*checkbox2*/}

          <Text style={styles.label}>Checkbox</Text>
          <View style={styles.ViewFilter}>
            {data2.map((item) => (
              <View key={item.id}>{renderCheckboxItem2({ item })}</View>
            ))}
          </View>

          {/*Button*/}
          <View style={styles.ViewBtn}>
            <TouchableOpacity style={styles.btnDialog}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDialog}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// const handleFocus = () => {
//     setIsFocused(true);
// };
//
// const handleBlur = () => {
//     setIsFocused(false);
// };

const SearchScreen = () => {
  const [indexOptions, setindexOptions] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/*title*/}
        <View style={styles.header}>
          <View style={styles.viewHeaderItemLeft}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameLogoApp}>Search</Text>
          </View>
        </View>
        <CustomSizebox height={8} />
        <View style={{ flex: 1, backgroundColor: ColorAssets.whiteColor }}>
          <ScrollView style={{ flex: 1 }}>
            <SearchBar />

            {/*option*/}
            <View style={styles.ViewOP}>
              <ScrollView
                horizontal={true}
                style={styleshome.viewOptions}
                showsHorizontalScrollIndicator={false}
              >
                {arrOptions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styleshome.itemOptions,
                        indexOptions === item.id
                          ? styleshome.itemOptions_isActive
                          : styleshome.itemOptions_noActive,
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

            <View style={styles.optionView}>
              <Text style={{ fontSize: 24, fontWeight: 600 }}>
                Recomended({arrFakeData.length})
              </Text>
              <TouchableOpacity style={{ position: "absolute", right: 40 }}>
                <SelectedRecommend size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={{ position: "absolute", right: 5 }}>
                <Category size={25} />
              </TouchableOpacity>
            </View>

            {/*list*/}
            <View style={{ flex: 1, paddingBottom: 80 }}>
              {arrFakeData.map((item) => (
                <RenderItemListVertical key={item.id} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
