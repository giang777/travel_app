import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import HeaderCustom from '../../common/HeaderCustom';
import { FontAwesome, Entypo, MaterialCommunityIcons, Fontisto, AntDesign } from 'react-native-vector-icons'
import { ColorAssets } from '../../utils/app-assets';
import { CustomTextInput } from '../../common/custom/custom-textInput';
import { CustomButton } from '../../common/custom/custom-button';

const BillScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, backgroundColor: ColorAssets.greenColor }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntdesignIcon style={styles.left} name='arrowleft' size={30} color={'white'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 8, color: 'white' }}>Payment details</Text>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: 'white', paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: 'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg' }} style={{ height: 100, width: 100, borderRadius: 10, marginHorizontal: 15 }} />
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>My Hotel</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome name='star' size={18} color={'yellow'} />
                                <FontAwesome name='star' size={18} color={'yellow'} />
                                <FontAwesome name='star' size={18} color={'yellow'} />
                            </View>
                            <View style={{ backgroundColor: ColorAssets.greenColor, padding: 5, borderRadius: 5 }}>
                                <Text style={{ fontSize: 16, color: 'white' }}>A perfect view</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 15, marginHorizontal: 20 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                        <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome name='calendar' size={18} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>13/09/2023</Text>
                                    <Text style={{ color: '#ccc' }}>14:00</Text>
                                </View>
                            </View>
                            <FontAwesome name='arrow-right' size={18} />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>13/09/2023</Text>
                                <Text style={{ color: '#ccc' }}>14:00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Entypo name='moon' size={18} />
                            <Text style={{ fontSize: 16, marginLeft: 5 }}>One night</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 15 }}>
                    <View style={[{ flexDirection: 'row' }, styles.shadow]}>
                        <FontAwesome name='bed' size={18} color={ColorAssets.greenColor} />
                        <Text style={{ fontSize: 16, color: ColorAssets.greenColor, marginLeft: 10 }}>Type of room</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: 'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg' }} style={{ height: 100, width: 100, borderRadius: 10, marginRight: 15 }} />
                            <View style={{ justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Fontisto name='persons' size={15} />
                                    <Text style={{ fontSize: 14, marginLeft: 8 }}>1 Nguoi lon</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name='smoking' size={15} />
                                    <Text style={{ fontSize: 14, marginLeft: 8 }}>Khong hut thuoc</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name='shield-check' size={15} />
                                    <Text style={{ fontSize: 14, marginLeft: 8 }}>Chinh sach huy</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 15, marginHorizontal: 5 }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 19, marginRight: 8 }}>Total</Text>
                                    <FontAwesome name='exclamation-circle' size={17} />
                                </View>
                                <Text style={{ color: '#ccc' }}>including taxes and fees</Text>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: ColorAssets.greenColor }}>600.000 d</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginBottom: 20, backgroundColor: 'white', padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name='contacts' size={20} color={ColorAssets.greenColor} />
                        <Text style={{ fontSize: 17, marginLeft: 10, color: ColorAssets.greenColor }}>Communications</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 15 }}></View>
                    <View>
                        <CustomTextInput isHaveTitle={true} title={'Your full name'} />
                        <CustomTextInput isHaveTitle={true} title={'Email'} />
                        <CustomTextInput isHaveTitle={true} title={'Your phone number'} />
                        <CustomTextInput isHaveTitle={true} title={'Country of residence'} />
                    </View>
                </View>
                <View style={{ marginTop: 10, marginBottom: 20, backgroundColor: 'white', padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='clipboard-list' size={20} color={ColorAssets.greenColor} />
                        <Text style={{ fontSize: 17, marginLeft: 10, color: ColorAssets.greenColor }}>Special requirements</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 15 }}></View>
                    <View>
                        <View>
                            <Text style={{ fontSize: 18 }}>Bed:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                <AntDesign name='checkcircleo' size={22} color={ColorAssets.greenColor} />
                                <Text style={{ fontSize: 18, marginLeft: 10 }}>Two beds</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18 }}>Room:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                <AntDesign name='checkcircleo' size={22} color={ColorAssets.greenColor} />
                                <Text style={{ fontSize: 18, marginLeft: 10 }}>No smoking</Text>
                            </View>
                        </View>
                    </View>
                    <CustomTextInput isHaveTitle={true} title={'Personal request if any'} />
                </View>
                <CustomButton title={'Pay'} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default BillScreen

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    }
})