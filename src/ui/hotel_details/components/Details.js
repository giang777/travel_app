
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';
import Entypo from "react-native-vector-icons/Entypo";
import Slider from '../components/Slider';
import ReadMore from 'react-native-read-more-text';
import ListIcon from '../components/ListIcon';
import Maps from '../components/Map';
import ListVote from '../components/ListVote';

const Details = (props) => {
    const {navigation}=props;
    const { name, address, description, listDetails, listFacilities ,gallery} = props.item;
    return (
        <View style={styles.details_marginNullTop}>
            <Text style={[styles.details_size25Bold]}>{name}</Text>
            <View style={[styles.details_flexAlign, styles.details_hr, styles.details_marginB]}>
                <Entypo style={styles.details_bold} name='location-pin' size={30} color="green" />
                <Text style={[styles.details_size16Center]}>{address}</Text>
            </View>
            <View>
                <View style={[styles.details_flexAlign, styles.details_flexJustify]}>
                    <Text style={styles.details_size20Bold}>Gallery Photos</Text>
                    <Pressable onPress={() => {
                        navigation.navigate("HotelPhotoScreen",{gallery:gallery});
                    }}>
                        <Text style={[styles.details_size20Bold, styles.details_green]}>See All</Text>
                    </Pressable>
                </View>
            </View>
            <Slider gallery={gallery}></Slider>

            <Text style={styles.details_size20Bold}>Details</Text>
            <ListIcon list={listDetails}></ListIcon>

            <Text style={styles.details_size20Bold}>Description</Text>
            <ReadMore
                numberOfLines={3}>
                <Text style={styles.details_size16Center}>{description}</Text>
            </ReadMore>

            <Text style={styles.details_size20Bold}>Facilities</Text>
            <ListIcon list={listFacilities}></ListIcon>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("HotelLocationScreen")
            }}>
                <Text style={styles.details_size20Bold}>Location</Text>
            </TouchableOpacity>
            <Maps isSmall={false}></Maps>

            <View>
                <View style={[styles.details_flexAlign, styles.details_flexJustify]}>
                    <View style={[styles.details_flexAlign, styles.details_flexJustify]}>
                        <Text style={styles.details_size20Bold}>Review</Text>
                    </View>
                    <Text style={[styles.details_size20Bold, styles.details_green]}>See All</Text>
                </View>
            </View>
            <ListVote></ListVote>
        </View>
    )
}

export default Details;

