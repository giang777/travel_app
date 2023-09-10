

// const ModalView = ({ show, navigation }) => {
//     return (
//         <View style={styles.centeredView}>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={show}
//             >
//                 <View style={[styles.centeredView, show ? { flex: 1 } : undefined]}>
//                     <View style={styles.modalView}>
//                         <Image source={require('../../../assets/icons/done.png')} style={{ width: 250, height: 250 }} />
//                         <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>Successful!</Text>
//                         <Text style={{ fontSize: 16, marginTop: 10 }}>You have successfully canceled your order. 80% funds will be returned to your account</Text>
//                         <TouchableOpacity style={styles.btngohome} onPress={() => navigation.goBack()}>
//                             <Text style={styles.textgohome}>OK</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal >
//         </View >
//     )
// }

// export default PayScreen