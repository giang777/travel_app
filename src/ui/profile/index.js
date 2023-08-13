import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../common/custom/custom-button";
import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";
import { handleLogOut } from "../../api/auth/auth-services";
const ProfileScreen = ({ navigation }) => {
  const logOut = async () => {
    const response = await handleLogOut();
    if (response === 200) {
      SharedPreferences.RESET_ALL().then(() =>
        changeScreenWithOutTime(navigation, "LoginHomeScreen")
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton title={"Đăng xuất đi đụ má"} onPress={logOut} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
