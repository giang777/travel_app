import {useFonts} from 'expo-font'
import { useEffect } from 'react';

// export const useCustomFonts = () => {
//   const [fontsLoaded] = useFonts({
//     'Galey_Round_Extra_Light_Font': require('../assets/fonts/Galey-Rounded-Extra-Light.ttf'),
//     'Galey_Semi_Bold': require('../assets/fonts/Galey-Semi-Bold.ttf'),
//   });

//   useEffect(() => {
//     if (!fontsLoaded) {
//       console.log("Đang load");
//     } else {
//       console.log("Đéo load được font");
//     }

//   }, [fontsLoaded]);

//   return fontsLoaded;
// };

export const ColorAssets = {
  greenColor: "#42BC66",
  greenColor270: "#C8ECD2",
  whiteColor: "#FFFFFF",
  shadowColor: "#2F2E2E",
  greyColor: "#6C6C6C",
  greyColor200: "#E8E8E8",
  blackolor: "#000000",
  dotColor:'#E0E0E0',
  transparentColor:'transparent',
};
export const ImageAssets = {
  backgroundImage: require("../assets/images/background-image.png"),
  banner0: require("../assets/images/banner-0.png"),
  banner1: require("../assets/images/banner-1.png"),
  banner2: require("../assets/images/banner-2.png"),
};

export const IconAssets = {
  logoApp: require("../assets/icons/logo.png"),
  iconGoogle: require("../assets/icons/google.png"),
};

export const subTitleAssets ={
  subTitle0:'Book your travels with confidence and convenience. Our app ensures your safety, comfort, and hassle-free journeys, making travel a breeze.',
  subTitle1:'Discover the perfect accommodations for your dream vacation. Our app features the finest hotels, handpicked to provide the ultimate holiday experience.',
  subTitle2:'Unleash your wanderlust and explore the world with our app. Start your journey of discovery and create unforgettable memories with us.'
}
export const titleAssets ={
  title0:'Travel safely,\ncomfortably & easily',
  title1:'Find the best hotels,\nfor vacation ',
  title2:'Let\'s discover the world with us'
}

