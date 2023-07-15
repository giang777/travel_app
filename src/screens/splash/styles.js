  
import { StyleSheet, Dimensions,Platform, } from 'react-native';
import { ColorAssets } from '../../utils/app-assets';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const styleSplashScreen=  StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageLogo: {
    width: windowWidth / 2,
    height: windowHeight / 4,
  },
  
});

export const styleWelcomeV1= StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
  },
  content: {
    justifyContent: "space-around",
    width:'100%',
    alignItems:'flex-start',
    paddingBottom: 20,
    paddingHorizontal: "5%",
  },
  title: {
    color: ColorAssets.whiteColor,
    fontWeight: "bold",
    fontSize: windowWidth / 9,
  },
  subtitle: {
    fontWeight: "bold",
    color: ColorAssets.greenColor,
    fontSize: 66,
    letterSpacing: 1,
    fontSize: windowWidth / 5.5,
  },
  description: {
    color: ColorAssets.whiteColor,
    fontWeight: 400,
    fontSize: windowWidth / 20,
  },
})

export const styleWelcomeV1_1 = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "flex-start",
  },
  banner: {
    width: windowWidth,
    height: windowHeight / 1.8
  },
  content: {
    marginVertical: 10,
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: 600,
  },
  subTitle: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
    height: "8%",
    color: ColorAssets.greyColor,
  },

  buttonSkip: {
    paddingVertical: 16,
    borderRadius: 20,
    backgroundColor: ColorAssets.greenColor270,
    alignItems: "center",
    width: "100%",
  },

  titleSkip: {
    fontWeight: "bold",
    color: ColorAssets.greenColor,
    fontSize: 16,
  },
  dotContainer: {
    marginBottom: 15,
    flexDirection: "row",
  },
  dot: {
    marginHorizontal: 5,
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: ColorAssets.dotColor,
  },
  selectedDot: {
    width: 35, backgroundColor: ColorAssets.greenColor, // Chọn màu tùy ý
  },
})