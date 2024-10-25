import { Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Title from '../components/title'
import commonStyles from '../styles/commonStyles'
import { FontAwesome } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Title title="Register" />
      <TextInput style={commonStyles.textInput} placeholder="Username"></TextInput>
      <FontAwesome name='user' size='20' style={commonStyles.txtInputIcon} />

      <TextInput style={[commonStyles.textInput, commonStyles.extraMarginEmail]} placeholder="Email"></TextInput>

      <TextInput secureTextEntry={true} style={commonStyles.textInput} placeholder="Password"></TextInput>
      <FontAwesome name='lock' size='20' style={commonStyles.txtInputIcon} />

      <TextInput secureTextEntry={true} style={commonStyles.textInput} placeholder="Repeat password"></TextInput>
      <FontAwesome name='lock' size='20' style={commonStyles.txtInputIcon} />

      <Pressable style={commonStyles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={commonStyles.btnText}>Register</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={commonStyles.txtBelowButton}>Back to Login?
          <Text style={commonStyles.link}> Click here</Text>
        </Text>
      </Pressable>
    </View>
  )
}

export default Register