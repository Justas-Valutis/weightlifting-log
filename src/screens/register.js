import { Text, View, TextInput, Pressable } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { BASE_URL } from '../config/apiConfig';

const Register = ({ navigation }) => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateRegistrattion = () => {
    if (!userName || userName.length < 3) {
      setError('Username is required and minimum 3 characters');
      return false;
    }

    if (!email || !validateEmail(email)) {
      setError('Email is required. Please enter a valid email');
      return false;
    }

    if (!password && password.length < 5) {
      setError('Password is required');
      return false;
    }

    if (password.length < 5 ||password !== repeatPassword ) {
      setError('Passwords do not match or is less than 5 characters');
      return false;
    }
    setError('');
    return true;

  }

  const handleRegister = async () => {
    const user = { userName, email, password, repeatPassword };
    console.log(user);

    if (!validateRegistrattion()) {
      return;
    }
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
        const errorText = await response.text(); // You can also attempt to parse JSON here if you return JSON in errors
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
        onChangeText={text => setUsername(text)}></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={[authCommonStyles.textInput, authCommonStyles.extraMarginEmail]} placeholder="Email"
        onChangeText={text => setEmail(text)}></TextInput>

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Password"
        onChangeText={text => setPassword(text)}></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Repeat password"
        onChangeText={text => setRepeatPassword(text)}></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      {error ? <Text style={authCommonStyles.error}>{error}</Text> : null}

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