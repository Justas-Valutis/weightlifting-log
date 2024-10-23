import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Title from '../components/title'
import commonStyles from '../styles/commonStyles'

const Register = () => {
  return (
    <View>
      <Title title="Register"/>
      <TextInput style={commonStyles.textInput} placeholder="Username"></TextInput>
        <TextInput style={commonStyles.textInput} placeholder="Email"></TextInput>
        <TextInput secureTextEntry={true} style={commonStyles.textInput} placeholder="Password"></TextInput>
        <TextInput secureTextEntry={true} style={commonStyles.textInput} placeholder="Repeat password"></TextInput>
        <Pressable style={commonStyles.btn} onPress={null}>
          <Text style={commonStyles.btnText}>Register</Text>
        </Pressable> 
        <Text style={commonStyles.txtBelowButton}>Back to Login? 
          <Text style={commonStyles.link}> Click here</Text></Text>  
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})