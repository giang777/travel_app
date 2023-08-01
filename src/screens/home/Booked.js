import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderNavigation from '../../components/custom/custom-header'
import Icon from 'react-native-vector-icons/Octicons'
import styles from './styles'
import { arrFakeData } from './fakeData'
import { RenderItemListVertical } from '../../components/renderList'

const Booked = (props) => {

    const IconRight = [
        {icon:<Icon name='note' size={30} color={'black'} />,onPress:()=>{}},//truyền icon vào đây nhớ
        {icon:<Icon name='apps' size={30} color={'black'} />,onPress:()=>{}}
    ]

    return (
        <SafeAreaView style={styles.containerBooked}>
            <HeaderNavigation titel={"Recently Booked"} arrIcon={IconRight} onBack={()=>{props.navigation.goBack()}}/>
            <FlatList
                data={arrFakeData}
                renderItem={RenderItemListVertical} //lấy ra từ trong mục component renderList nhé
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default Booked

