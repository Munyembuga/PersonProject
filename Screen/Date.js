// import React, {useState} from 'react';
// import { View, Button, TextInput, StyleSheet } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// export default function ShareExample() {

//   const [date, SetDate] = useState('');
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     SetDate(date);
//     hideDatePicker();
//   };

// return(
//   <View style={styles.container}>
//   <TextInput
//             style={styles.textInput}
//             value={date}
//             placeholder="Date..."/>
//   <Button
//   onPress={showDatePicker}
//   title='Set Date'/>
//   <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//           />
//   </View>
// )
  
// }

// const styles = StyleSheet.create({
//   container:{
//     padding: 50
//   },
//   textInput:{
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 5
//   }
// })
