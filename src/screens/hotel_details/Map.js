import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { Dimensions } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from 'react-native'

export default function Maps(props) {
    const [pin, setPin] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324
    })
    const [region, setRegion] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    const { isSmall } = props;
    useEffect(() => {
        console.log(isSmall);
    }, [])
    return (
        <View style={isSmall ? styles.containerTrue : styles.containerFalse}>
            {/* <GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details)
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "KEY",
					language: "en",
					components: "country:us",
					types: "establishment",
					radius: 30000,
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/> */}
            <MapView
                style={isSmall ? styles.mapTrue : styles.mapFalse}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                provider="google"
            >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                <Marker
                    coordinate={pin}
                    pinColor="#000000"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinates)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>I'm here</Text>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFalse: {
        alignSelf: 'center',
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").width * 0.5,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
    },
    containerTrue: {
        alignSelf: 'center',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 100
    },
    mapFalse: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").width * 0.5,
    },
    mapTrue: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
})