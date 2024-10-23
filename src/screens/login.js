import React from 'react'
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native'
import Title from '../components/title'
import commonStyles from '../styles/commonStyles'
import { Button } from 'react-native'

const Login = () => {
  return (
    <View>
        <Title title="Login"/>
        <TextInput style={commonStyles.textInput} placeholder="Username"></TextInput>
        <TextInput style={commonStyles.textInput} placeholder="Password"></TextInput>
        <Pressable style={commonStyles.btn} onPress={null}>
          <Text style={commonStyles.btnText}>Login</Text>
        </Pressable> 
        <Text style={commonStyles.txtBelowButton}>Don't have an account?  
          <Text style={commonStyles.link}> Sign up</Text></Text>   
    </View>
  )
}

const styles = StyleSheet.create({
      
})


export default Login