import React from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import Title from '../components/title'
import commonStyles from '../styles/commonStyles'
import { FontAwesome } from '@expo/vector-icons';


const Login = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Title title="Login" />
      <TextInput style={commonStyles.textInput} placeholder="Username"></TextInput>
      <FontAwesome name='user' size='20' style={commonStyles.txtInputIcon} />

      <TextInput style={commonStyles.textInput} placeholder="Password"></TextInput>
      <FontAwesome name='lock' size='20' style={commonStyles.txtInputIcon} />

      <Pressable style={commonStyles.btn} onPress={() => navigation.navigate(null)}>
        <Text style={commonStyles.btnText}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={commonStyles.txtBelowButton}>Don't have an account?
          <Text style={commonStyles.link}> Sign up</Text></Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={commonStyles.txtBelowButton}>Forgot password?
          <Text style={commonStyles.link}> Recover here</Text></Text>
      </Pressable>
    </View>
  )
}

export default Login