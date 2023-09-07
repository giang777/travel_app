import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import UserAvatar from "react-native-user-avatar";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  CustomButton,
  CustomButtonProfile,
} from "../../common/custom/custom-button";
import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";
import { handleLogOut } from "../../api/auth/auth-services";
import { ColorAssets, IconAssets } from "../../utils/app-assets";
import { ScrollView } from "react-native";
import Setting from "../../../assets/icons/more.svg";
import Shop from "../../../assets/icons/shop.svg";
import Right from "../../../assets/icons/right.svg";
import Wallet from "../../../assets/icons/Wallet.svg";
import Heart from "../../../assets/icons/heart.svg";
import Follow from "../../../assets/icons/follow.svg";
import Clock from "../../../assets/icons/clock.svg";
import Rating from "../../../assets/icons/rating.svg";
import Notification from "../../../assets/icons/noti.svg";
import Shield from "../../../assets/icons/shield.svg";
import Help from "../../../assets/icons/help.svg";
import LogOut from "../../../assets/icons/logout.svg";
import Show from "../../../assets/icons/Show.svg";
import i18n from "../../l10n/i18n";
import { useState } from "react";
import { useEffect } from "react";
const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const getUserInfor = () => {
    SharedPreferences.GET_USER_INFOR()
      .then((userInfoString) => {
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          setFullName(userInfo.fullName);
        } else {
          console.log("User information not found.");
        }
      })

      .catch((error) => {
        console.error("Error retrieving user information:", error);
      });
  };
  const logOut = async () => {
    const response = await handleLogOut();
    if (response === 200) {
      SharedPreferences.RESET_ALL().then(() =>
        changeScreenWithOutTime(navigation, "LoginHomeScreen")
      );
    }
  };
  useEffect(() => {
    getUserInfor();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 15, paddingTop: 8 }}>
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameApp}>{i18n.t("profile.title")}</Text>
          </View>
          <View
            onTouchStart={() => {
              console.log("navigate to Setting Screen");
            }}
          >
            <Setting />
          </View>
        </View>
      </View>
      {/* body */}
      <ScrollView>
        <View style={styles.body}>
          <View
            style={styles.infor}
            onTouchStart={() => console.log("thay avatar")}
          >
            <UserAvatar
              style={styles.avatar}
              size={150}
              name={fullName.split(" ").pop().charAt(0)}
            />

            <Text style={styles.fullName}>{fullName}</Text>
          </View>
          <View style={styles.options}>
            <CustomButtonProfile
              colorLeft={ColorAssets.greenColor}
              colorRight={ColorAssets.greyColor}
              titleLeft={i18n.t("profile.startSelling")}
              titleRight={i18n.t("profile.freeRegistration")}
              iconStart={<Shop />}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              titleLeft={i18n.t("profile.payment")}
              iconStart={<Wallet />}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              titleLeft={i18n.t("profile.myLikes")}
              iconStart={<Heart />}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              titleLeft={i18n.t("profile.followingHotels")}
              iconStart={<Follow />}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              iconStart={<Clock />}
              titleLeft={i18n.t("profile.recentlyViewed")}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              iconStart={<Rating />}
              titleLeft={i18n.t("profile.myRating")}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              iconStart={<Notification />}
              titleLeft={i18n.t("profile.notifications")}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              iconStart={<Shield />}
              titleLeft={i18n.t("profile.security")}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
              iconStart={<Help />}
              titleLeft={i18n.t("profile.help")}
              iconEnd={<Right />}
            />
            <CustomButtonProfile
            iconStart={<Show/>}
              titleLeft={i18n.t("profile.darkTheme")}
            />
            <CustomButtonProfile
            iconStart={<LogOut/>}
            colorLeft={"#FF0000"}
              titleLeft={i18n.t("profile.logOut")}
              onPress={logOut}
            />
          </View>
        </View>
      </ScrollView>
      {/* <CustomButton title={"Đăng xuất đi đụ má"} onPress={logOut} /> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorAssets.whiteColor,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewHeaderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoApp: {
    width: 30,
    height: 30,
  },
  nameApp: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  body: {
    backgroundColor: ColorAssets.greyColor100,
    flex: 1,
    paddingBottom: 70,
  },
  infor: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  fullName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  options: {
    marginTop: 2,
  },
});
