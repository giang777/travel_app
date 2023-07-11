import {Image, StyleSheet,Button,Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


const SplashScreen = ({navigation}) => {
  setTimeout(() => navigation.navigate('HomeScreen'), 3000);
  return (
    <View style={styles.container}>
        <Image
        style={styles.imageLogo}
        source={require('../../assets/icons/logo.png')}
      />
    </View>
  );
};


export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageLogo: {
    width: width / 2,
    height: height / 4,
  },
});
