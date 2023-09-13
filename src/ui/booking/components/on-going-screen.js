import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ItemOngoing } from "../../../common/renderItemBooking";
import { arrFakeDataOngoing } from "../fakeData";

export default OngoingScreen = ({ showModal }) => {
  return (
    <FlatList
      style={{ paddingHorizontal: 10}}
      data={arrFakeDataOngoing}
      renderItem={({ item }) => (
        <ItemOngoing item={item} showModal={showModal} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
