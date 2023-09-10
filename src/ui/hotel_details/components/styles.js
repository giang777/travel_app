import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
var { width,height } = Dimensions.get("window");

const styles = StyleSheet.create({
    details_size20Bold: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    details_bold: {
        fontWeight: '600'
    },
    details_padding10: {
        padding: 10,
    },
    details_margin20: {
        margin: 20,
    },
    details_marginNullTop: {
        margin: 20,
        marginTop: -10,
    },
    details_marginB: {
        paddingBottom: 30,
    },
    details_size16Center: {
        fontSize: 16,
        justifyContent: 'center',
    },
    details_size25Bold: {
        fontSize: 25,
        fontWeight: '600'
    },
    details_flexAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        left: -7,
        marginBottom: 10,
    }, details_flexJustify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: -7,
        marginBottom: 10,
    },details_hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }, details_green: {
        color: 'green',
    },

    listIcon_imageBanner: {
        height: width * 0.1,
        width: width * 0.1,
    },
    listIcon_item: {
        width:width*0.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    listIcon_flex: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },

    listVote_imageBanner: {
        height: width * 0.14,
        width: width * 0.14,
        borderWidth: 2,
        borderRadius: 150
    },
    listVote_item: {
        // margin: width * 0.05,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listVote_vote: {
        backgroundColor: 'green',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal:20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.2
    },

    map_containerFalse: {
        alignSelf: 'center',
        width: width * 0.9,
        height: width * 0.5,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
    },
    map_containerTrue: {
        alignSelf: 'center',
        width: width,
        height: height,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 100
    },
    map_mapFalse: {
        width: width * 0.9,
        height: width * 0.5,
    },
    map_mapTrue: {
        width: width,
        height: height,
    },
    
    slider_container: {
        flex: 1,
      },
      slider_swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
      },
      slider_imageBanner: {
        height: width / 3,
        width: width - 200,
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: 'red',
      },
})

export default styles;