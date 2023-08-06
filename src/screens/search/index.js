import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, Slider} from 'react-native';
import styles from './styles';
import styleshome from '../home/styles'
import { arrOptions, arrFakeData } from '../home/fakeData';
import { RenderItemListHorizontal,RenderItemListVertical } from '../../components/renderList';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ColorAssets, IconAssets} from "../../utils/app-assets";
import Modal from 'react-native-modal';
import {arrCity, arrResults, arrStar, optionsCheckBox} from "./fakedataSearch";
import { Ionicons } from '@expo/vector-icons';

import CheckBox from "react-native-check-box";
import {Checkbox} from "expo-checkbox";



    const SearchBar = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [indexOptions, setindexOptions] = useState(1);
    const [data, setData] = useState([
        { id: 1, label: 'Option 1', isChecked: false },
        { id: 2, label: 'Option 2', isChecked: false },
        { id: 3, label: 'Option 3', isChecked: false },
        // Add more options as needed
    ]);
    const toggleCheckbox = (itemId) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };
    const renderCheckboxItem = ({ item }) => (
        <View style={styles.checkboxContainer}>
            <Checkbox color={"#1AB65C"}
                value={item.isChecked}
                onValueChange={() => toggleCheckbox(item.id)}
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
                <TextInput style={styles.input}
                           placeholder="Search"
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                />
                <TouchableOpacity style={styles.iconButton}>
                    <Image style={styles.icon} source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54481.png'}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={toggleModal}>
                    <Image style={styles.icon}source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3024/3024539.png' }} />
                </TouchableOpacity>
                {/*//Bottom dialog*/}
                <Modal
                    isVisible={isModalVisible}
                    style={styles.modal}
                    backdropOpacity={0.5}
                    onBackdropPress={toggleModal}
                    swipeDirection={['down']} // Có thể thay đổi hướng vuốt để đóng dialog
                    onSwipeComplete={toggleModal}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.label}>Country</Text>
                        {/*Options*/}
                        <View style={styles.ViewFilter}>
                            <ScrollView  horizontal={true} style={styles.viewOptions} showsVerticalScrollIndicator={false}>
                                {
                                    arrCity.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                                                onPress={() => { setindexOptions(item.id) }}
                                                key={index}
                                            >
                                                <Text style={[{fontWeight: 'bold', fontSize: 16},indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.city}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        <Text style={styles.label}>Results</Text>
                        <View style={styles.ViewFilter}>

                            <ScrollView  horizontal={true} style={styles.viewOptions} showsVerticalScrollIndicator={false}>
                                {arrResults.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                                                onPress={() => { setindexOptions(item.id) }}
                                                key={index}
                                            >
                                                <Text style={[{fontWeight: 'bold', fontSize: 16},indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        <Text style={styles.label}>Star</Text>
                        <View style={styles.ViewFilter}>

                            <ScrollView  horizontal={true} style={styles.viewOptions} showsVerticalScrollIndicator={false}>
                                {
                                    arrStar.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                                            onPress={() => { setindexOptions(item.id) }}
                                            key={index}
                                        >
                                            <Text style={[{fontWeight: 'bold', fontSize: 16},indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.star}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                                }
                            </ScrollView>
                        </View>

                        {/*slider*/}
                        <Text style={styles.label}>Price Range:</Text>
                        <Text>{`$${priceRange[0]} - $${priceRange[1]}`}</Text>
                        {/*<Slider*/}
                        {/*    style={styles.slider}*/}
                        {/*    minimumValue={0}*/}
                        {/*    maximumValue={100}*/}
                        {/*    step={1}*/}
                        {/*    thumbTintColor="#007AFF"*/}
                        {/*    minimumTrackTintColor="#007AFF"*/}
                        {/*    maximumTrackTintColor="#000000"*/}
                        {/*    value={priceRange}*/}
                        {/*    onValueChange={onPriceRangeChange}*/}
                        {/*/>*/}

                        {/*checkbox*/}
                        <Text style={styles.label}>Checkbox</Text>
                        <View style={styles.ViewFilter}>
                            <FlatList
                                data={data}
                                renderItem={renderCheckboxItem}
                                keyExtractor={(item) => item.id.toString()}
                                horizontal // Đặt thuộc tính horizontal để hiển thị danh sách kéo ngang
                            />
                        </View>
                        {/*checkbox*/}
                        <Text style={styles.label}>Checkbox</Text>
                        {/*button*/}
                        <View style={styles.ViewFilter}>
                            <FlatList
                                data={data}
                                renderItem={renderCheckboxItem}
                                keyExtractor={(item) => item.id.toString()}
                                horizontal // Đặt thuộc tính horizontal để hiển thị danh sách kéo ngang
                            />
                        </View>
                        <View style={styles.ViewBtn}>
                            <TouchableOpacity style={styles.btnDialog}>
                                <Text style={{fontSize:20,fontWeight:"bold",color:'white'}}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnDialog}>
                                <Text style={{fontSize:20,fontWeight:"bold",color:'white'}}>Apply</Text>
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

        <View style={styles.container}>
            {/*title*/}
            <View style={styles.header}>
                <View style={styles.viewHeaderItem}>
                    <Image source={IconAssets.logoApp} style={styles.logoApp} />
                    <Text style={styles.nameApp}>Search</Text>
                </View>
            </View>
            <SearchBar />
            {/*option*/}
            <View style={styles.ViewOP}>
                <ScrollView horizontal={true} style={styleshome.viewOptions} showsHorizontalScrollIndicator={false}>
                    {
                        arrOptions.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    style={[styleshome.itemOptions, indexOptions === item.id ? styleshome.itemOptions_isActive : styleshome.itemOptions_noActive]}
                                    onPress={() => { setindexOptions(item.id) }}
                                    key={index}
                                >
                                    <Text style={[{fontWeight: 'bold', fontSize: 16},indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>

            
            <View style={styles.optionView}>
            <Text style={{fontSize:27}}>Recomended({arrFakeData.length})</Text>
                <TouchableOpacity style={{position:"absolute",right:40}}>
                    <Image style={{width:30,height:30,}} source={{uri:'https://cdn-icons-png.flaticon.com/128/570/570170.png'}} />
                </TouchableOpacity>
                <TouchableOpacity style={{position:"absolute",right:5}}>
                    <Image style={{width:30,height:30,}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2549/2549922.png'}} />
                </TouchableOpacity>

            </View>

            {/*list*/}
            <View style={{width:"100%",marginTop:10}}>
                <FlatList
                    data={arrFakeData}
                    renderItem={RenderItemListVertical} //lấy ra từ trong mục component renderList nhé
                    keyExtractor={item => item.id}
                />
            </View>



        </View>
        
    );
};



export default SearchScreen;


