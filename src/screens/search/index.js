import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView,FlatList } from 'react-native';
import styles from './styles';
import styless from '../home/styles'
import { arrOptions, arrFakeData } from '../home/fakeData';
import { RenderItemListHorizontal,RenderItemListVertical } from '../../components/renderList';
import { SafeAreaView } from 'react-native-safe-area-context'


const SearchBar = () => {
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
                <TouchableOpacity style={styles.iconButton}>
                    <Image style={styles.icon}source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3024/3024539.png' }} />
                </TouchableOpacity>

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


const SearScreen = () => {
    const [indexOptions, setindexOptions] = useState(1);
    return (

        <View style={styles.container}>
            <SearchBar />
            {/*option*/}
            <View style={styles.ViewOP}>
                <ScrollView horizontal={true} style={styles.viewOptions} showsHorizontalScrollIndicator={false}>
                {
                    arrOptions.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={[styless.itemOptions, indexOptions === item.id ? styless.itemOptions_isActive : styless.itemOptions_noActive]}
                                onPress={() => { setindexOptions(item.id) }}
                                key={index}
                            >
                                <Text style={indexOptions === item.id ? { color: "white" } : { color: "black" }}>{item.titel}</Text>
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



export default SearScreen;


