import { Text, View, TextInput, Pressable } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { BASE_URL } from '../config/apiConfig';
import { validateUser } from '../components/shared/validateUser';
import ErrorText from '../components/shared/errorText';

const Register = ({ navigation }) => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!validateUser(userName, email, password, repeatPassword, setError)) {
      return;
    }

    const user = { userName, email, password, repeatPassword };

    try {
      const response = await fetch(`${BASE_URL}user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      console.log('Response:', response);

      if (response.ok) {
        alert('Registration successful!');
        navigation.navigate('Login');
      } else {
        const errorText = await response.text();
        alert(`Registration failed. Status: ${response.status} \nDetails: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <View style={authCommonStyles.container}>
      <Title title="Register" />
      <TextInput style={authCommonStyles.textInput} placeholder="Username"
        onChangeText={text => setUsername(text)} autoCapitalize="none"></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={[authCommonStyles.textInput, authCommonStyles.extraMarginEmail]} placeholder="Email"
        onChangeText={text => setEmail(text)} autoCapitalize="none"></TextInput>

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Password"
        onChangeText={text => setPassword(text)} autoCapitalize="none"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Repeat password"
        onChangeText={text => setRepeatPassword(text)} autoCapitalize="none"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <ErrorText error={error} />

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