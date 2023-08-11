
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import Entypo from "react-native-vector-icons/Entypo";
import Slider from './Slider';
import ReadMore from 'react-native-read-more-text';
import ListIcon from './ListIcon';
import Bottom from './Bottom';
import Maps from './Map';
import ListVote from './ListVote';

const Details = (props) => {
    const {navigation}=props;
    const { name, address, description, listDetails, listFacilities ,gallery} = props.item;
    return (
        <View style={styles.marginNullTop}>
            <Text style={[styles.size25Bold]}>{name}</Text>
            <View style={[styles.flexAlign, styles.hr, styles.marginB]}>
                <Entypo style={styles.bold} name='location-pin' size={30} color="green" />
                <Text style={[styles.size16Center]}>{address}</Text>
            </View>
            <View>
                <View style={[styles.flexAlign, styles.flexJustify]}>
                    <Text style={styles.size20Bold}>Gallery Photos</Text>
                    <Pressable onPress={() => {
                        navigation.navigate("HotelPhotoScreen",{gallery:gallery});
                    }}>
                        <Text style={[styles.size20Bold, styles.green]}>See All</Text>
                    </Pressable>
                </View>
            </View>
            <Slider gallery={gallery}></Slider>

            <Text style={styles.size20Bold}>Details</Text>
            <ListIcon list={listDetails}></ListIcon>

            <Text style={styles.size20Bold}>Description</Text>
            <ReadMore
                numberOfLines={3}>
                <Text style={styles.size16Center}>{description}</Text>
            </ReadMore>

            <Text style={styles.size20Bold}>Facilities</Text>
            <ListIcon list={listFacilities}></ListIcon>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("HotelLocationScreen")
            }}>
                <Text style={styles.size20Bold}>Location</Text>
            </TouchableOpacity>
            <Maps isSmall={false}></Maps>

            <View>
                <View style={[styles.flexAlign, styles.flexJustify]}>
                    <View style={[styles.flexAlign, styles.flexJustify]}>
                        <Text style={styles.size20Bold}>Review</Text>
                    </View>
                    <Text style={[styles.size20Bold, styles.green]}>See All</Text>
                </View>
            </View>
            <ListVote></ListVote>
        </View>
    )
}

export default Details;

