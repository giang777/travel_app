import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { arrOptions, arrFakeDataOngoing, arrFakeDataCompleted, arrFakeDataCanceled } from './fakeData';
import { ColorAssets, IconAssets, ImageAssets } from '../../utils/app-assets';
import { ItemOngoing, ItemCompleted, ItemCanceled } from '../../components/renderItemBooking/index'
import Modal from "react-native-modal";
const BookingScreen = () => {
  const [indexOptions, setindexOptions] = useState(1);
  const [modal, setshowModal] = useState(false)
  const hideModal = () => { setshowModal(false) }
  const showModal = () => { setshowModal(true) }
  useEffect(() => {
  }, [indexOptions])
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        {/*Header */}
        <View style={styles.header}>
          <View style={styles.viewHeaderItem}>
            <Image source={IconAssets.logoApp} style={styles.logoApp} />
            <Text style={styles.nameApp}>My Booking</Text>
          </View>
          <View style={styles.viewHeaderItem}>
            <TouchableOpacity>
              <Icon name='search' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Options*/}
        <View style={styles.viewOptions}>
          {
            arrOptions.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[styles.itemOptions, indexOptions === item.id ? styles.itemOptions_isActive : styles.itemOptions_noActive]}
                  onPress={() => { setindexOptions(item.id) }}
                  key={index}
                >
                  <Text style={[{ fontWeight: 'bold', fontSize: 16 }, indexOptions === item.id ? { color: "white" } : { color: ColorAssets.greenColor }]}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/*Body*/}
      {indexOptions == 1 ? <OngoingScreen showModal={showModal} /> : (indexOptions == 2 ? <CompletedScreen /> : <CanceledScreen />)}
      <WrapperComponent hideModal={hideModal} hide={modal} />
    </SafeAreaView>

  )
}
// Bottom Dialog
const WrapperComponent = ({ hide, hideModal }) => {
  const confirmCancel = () => {
    hideModal()
    console.log('chuyen man hinh');
  }
  return (
    <View>
      <Modal
        isVisible={hide}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        swipeDirection={'down'}
        onSwipeComplete={hideModal}
        animationIn={'bounceInUp'}
        animationOut={'bounceOutDown'}
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={styles.boxModal}>
          <View style={styles.topModal}>
            <View style={styles.iconBar}></View>
            <Text style={styles.titleModal}>Cancel Booking</Text>
            <View style={styles.hrModal}></View>
            <Text style={styles.text1Modal}>Are you sure you want to cancel your hotel booking?</Text>
          </View>
          <Text style={styles.text2Modal}>Only 80% of the money you can refund from your payment according to our policy</Text>

          <View style={styles.bottomModal}>
            <TouchableOpacity style={styles.btnCancelModal} onPress={hideModal}>
              <Text style={styles.textCancelModal}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContinueModal} onPress={confirmCancel}>
              <Text style={styles.textContinueModal}>Yes. Continue</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  );
}

// Màn hình Ongoing
const OngoingScreen = ({ showModal }) => {
  return (
    <FlatList
      style={{ paddingHorizontal: 10 }}
      data={arrFakeDataOngoing}
      renderItem={({ item }) => <ItemOngoing item={item} showModal={showModal} />}
      keyExtractor={(item) => item.id}
    />
  )
}

// Màn hình Completed
const CompletedScreen = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 10 }}
      data={arrFakeDataCompleted}
      renderItem={({ item }) => <ItemCompleted item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

// Màn hình Canceled
const CanceledScreen = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 10 }}
      data={arrFakeDataCanceled}
      renderItem={({ item }) => <ItemCanceled item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
export default BookingScreen

