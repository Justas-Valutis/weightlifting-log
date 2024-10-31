import React, { useContext } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';


const Login = ({ navigation }) => {

  const { login } = useContext(AuthContext); // Access the login function from context


  return (
    <View style={authCommonStyles.container}>
      <Title title="Login" />
      <TextInput style={authCommonStyles.textInput} placeholder="Username"></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={authCommonStyles.textInput} placeholder="Password"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <Pressable style={authCommonStyles.btn} onPress={login}>
        <Text style={authCommonStyles.btnText}>Login</Text>
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={authCommonStyles.txtBelowButton}>Don't have an account?
          <Text style={authCommonStyles.link}> Sign up</Text></Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('RecoverPassword')}>
        <Text style={authCommonStyles.txtBelowButton}>Forgot password?
          <Text style={authCommonStyles.link}> Recover here</Text></Text>
      </Pressable>
    </View>
  )
}

export default Login