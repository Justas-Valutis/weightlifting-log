import { Text, View, TextInput, Pressable } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

const Register = ({ navigation }) => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = async () => {
    // Register logic
    const user = { userName, email, password };

    try {
      const response = await fetch('http://localhost:8090/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      navigation.navigate('Login');

    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <View style={authCommonStyles.container}>
      <Title title="Register" />
      <TextInput style={authCommonStyles.textInput} placeholder="Username"
        onChangeText={text => setUsername(text)}></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={[authCommonStyles.textInput, authCommonStyles.extraMarginEmail]} placeholder="Email"
        onChangeText={text => setEmail(text)}></TextInput>

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Password"
        onChangeText={text => setPassword(text)}></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Repeat password"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <Pressable style={authCommonStyles.btn} onPress={handleRegister}>
        <Text style={authCommonStyles.btnText}>Register</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={authCommonStyles.txtBelowButton}>Back to Login?
          <Text style={authCommonStyles.link}> Click here</Text>
        </Text>
      </Pressable>
    </View>
  )
}

export default Register