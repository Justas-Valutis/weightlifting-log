import React, { useContext, useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';


const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext); // Access the login function from context

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Login logic
    const user = { userName, password };

    try {
      const response = await fetch('http://localhost:8090/api/user/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid username or password');
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      console.log('Success:', data);
      login();

    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
    }

  }

  return (
    <View style={authCommonStyles.container}>
      <Title title="Login" />
      <TextInput style={authCommonStyles.textInput} placeholder="Username" onChangeText={text => setUsername(text)}></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={authCommonStyles.textInput} placeholder="Password" onChangeText={text => setPassword(text)}></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <Pressable style={authCommonStyles.btn} onPress={handleLogin}>
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