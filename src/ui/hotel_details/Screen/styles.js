import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    HotelLocationScreen_imageBanner: {
        height: width * 0.4,
        width: width * 0.4,
        borderWidth: 2,
        borderRadius: 10
    },
    HotelLocationScreen_item: {
        width: width * 0.4,
        margin: width * 0.05
    },
    HotelLocationScreen_flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:80
    },

    HotelPhotoScreen_imageBanner: {
        height: width * 0.4,
        width: width * 0.4,
        borderWidth: 2,
        borderRadius: 10
    },
    HotelPhotoScreen_item: {
        width: width * 0.4,
        margin: width * 0.05
    },
    HotelPhotoScreen_flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:80
    },

    HotelReviewScreen_imageBanner: {
        height: width * 0.4,
        width: width * 0.4,
        borderWidth: 2,
        borderRadius: 10
    },
    HotelReviewScreen_item: {
        width: width * 0.4,
        margin: width * 0.05
    },
    HotelReviewScreen_flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 80
    },
    HotelReviewScreen_marginTop: { marginTop: 100 },
    HotelReviewScreen_voteFalse: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.2,
        marginLeft: 10
    },
    HotelReviewScreen_voteTrue: {
        backgroundColor: '#14aa14',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.2,
        marginLeft: 10
    },
    HotelReviewScreen_vote: {
        color: '#14aa14',
        borderColor: '#14aa14'
    }
})