import React,{useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import {TextInput}  from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton'
import {fontSize,spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null)

//(val)=>setSubject(val)
  return (
  <View style={styles.container}>
      <View style={styles.inputcontainer}>
      <TextInput onChangeText={setSubject} style={styles.textInput} label="What would you like to focus on ?"/>
      <View style={styles.button}>
      <RoundedButton title="+" size={50}  onPress={()=>addSubject(subject)}/>
      </View>
      </View>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    
  },
   textInput:{
      flex:1,
      marginRight:spacing.sm,
  },
  button:{
    justifyContent:'center',

  },
  inputcontainer:{
     padding:spacing.lg,
     justifyContent:'top',
     flexDirection:'row',
     
  },
});
