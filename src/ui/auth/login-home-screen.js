import {
  styleLoginHomeheet,
  StatusBar,
  Text,
  View,
  BackHandler,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Device from 'expo-device'
import React from "react";
import { IconAssets, containScreenAssets } from "../../utils/app-assets";
import Sizebox from "../../common/custom/custom-sizebox";
import { CustomButton } from "../../common/custom/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleLoginHome } from "./styles";
import i18n from "../../l10n/i18n";

const LoginHomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={containScreenAssets.safeAreaView}>
      <View style={containScreenAssets.container}>
        <ScrollView
          style={containScreenAssets.scrollView}
          contentContainerStyle={containScreenAssets.scrollViewContent}
        >
          <View style={styleLoginHome.content}>
            <Text style={styleLoginHome.title}>{i18n.t("auth.home.letsYouIn")}</Text>
            <TouchableOpacity
              style={styleLoginHome.buttonLoginGoogle}
              onPress={() => { }}
            >
              <View style={styleLoginHome.contentButton}>
                <Image
                  style={styleLoginHome.imageIcon}
                  source={IconAssets.iconGoogle}
                />
                <Sizebox width={10} />
                <Text style={styleLoginHome.titleGoogle}>{i18n.t("auth.home.continueWithGoogle")}</Text>
              </View>
            </TouchableOpacity>
            <Sizebox height={40} />
            <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styleLoginHome.hr}></View>
              <Text style={{ marginHorizontal: 15 }}>or</Text>
              <View style={styleLoginHome.hr}></View>
            </View>
            <Sizebox height={40} />
            <CustomButton
              style={styleLoginHome.button}
              title={i18n.t("auth.home.signInWithUsername")}
              onPress={() => navigation.navigate("LoginEmailScreen")}
            />
          </View>
          <View style={styleLoginHome.footer}>
            <Text style={styleLoginHome.titleDontHaveAccount}>
            {i18n.t("auth.dontHaveAccount")}
            </Text>
            <Sizebox width={5} />
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              // onPress={() => navigation.navigate("ConfirmInformationScreen")}
            >
              <Text style={styleLoginHome.titleSignUp}> {i18n.t("auth.signUp")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginHomeScreen;

