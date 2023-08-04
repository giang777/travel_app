import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderCustom from '../../components/HeaderCustom';
import Banner from './Banner';
import styles from './styles';
import Entypo from "react-native-vector-icons/Entypo";
import Slider from './Slider';
import ReadMore from 'react-native-read-more-text';
import ListIcon from './ListIcon';
import Bottom from './Bottom';

const Details = (props) => {
    const { name, address, description, listDetails, listFacilities } = props.item;
    return (
        <View style={styles.margin20}>
            <Text style={[styles.size25Bold]}>{name}</Text>
            <View style={[styles.flexAlign, styles.hr, styles.marginB]}>
                <Entypo style={styles.bold} name='location-pin' size={30} color="green" />
                <Text style={[styles.size16Center]}>{address}</Text>
            </View>
            <View>
                <View style={[styles.flexAlign, styles.flexJustify]}>
                    <Text style={styles.size20Bold}>Gallery Photos</Text>
                    <Text style={[styles.size20Bold, styles.green]}>See All</Text>
                </View>
            </View>
            <Slider></Slider>

            <Text style={styles.size20Bold}>Details</Text>
            <ListIcon list={listDetails}></ListIcon>

            <Text style={styles.size20Bold}>Description</Text>
            <ReadMore
                numberOfLines={3}>
                <Text style={styles.size16Center}>{description}</Text>
            </ReadMore>

            <Text style={styles.size20Bold}>Facilities</Text>
            <ListIcon list={listFacilities}></ListIcon>

            <Bottom price={19}></Bottom>
        </View>
    )
}

export default Details;

