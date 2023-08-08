import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderNavigation from '../../components/custom/custom-header'
import AnimatedGradient from '../../components/custom/custom-imgloading'
import Icon from 'react-native-vector-icons/Octicons'
import styles from './styles'
import { arrFakeData } from './fakeData'
import { RenderItemListVertical } from '../../components/renderList'
import axiosHotel from '../../api/api_hotel'


const Booked = (props) => {
    const [listHotel, setlistHotel] = useState([])
    const callDataHotel = async () => {
        try {
            const response = await axiosHotel.get("/api/typeOfRentalService");
            console.log("--------------------------------");
            setlistHotel(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        callDataHotel()
    }, [])
    console.log(listHotel.length);
    const IconRight = [
        { icon: <Icon name='note' size={30} color={'black'} />, onPress: () => { } },//truyền icon vào đây nhớ
        { icon: <Icon name='apps' size={30} color={'black'} />, onPress: () => { } }
    ]

    return (
        <SafeAreaView style={styles.containerBooked}>
            <HeaderNavigation titel={"Recently Booked"} arrIcon={IconRight} onBack={() => { props.navigation.goBack() }} />
            {listHotel.length == 0 ? <FlatList
                style={{ padding: 10 }}
                data={arrFakeData}
                renderItem={() => (<AnimatedGradient typeLoad={2} />)}
                keyExtractor={item => item.id}
            /> : <FlatList
                style={{ padding: 10 }}
                data={listHotel}
                renderItem={RenderItemListVertical} //lấy ra từ trong mục component renderList nhé
                keyExtractor={item => item.id}
            />}

        </SafeAreaView>
    )
}

export default Booked

