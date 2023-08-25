import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { ItemCanceled } from '../../../common/renderItemBooking';
import { arrFakeDataCanceled } from '../fakeData';


export default CanceledScreen = () => {
    return (
      <FlatList
        style={{ paddingHorizontal: 10 }}
        data={arrFakeDataCanceled}
        renderItem={({ item }) => <ItemCanceled item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  };

const styles = StyleSheet.create({})