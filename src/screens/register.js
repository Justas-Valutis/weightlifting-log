import { Text, View, TextInput, Pressable } from 'react-native'
import Title from '../components/shared/title'
import authCommonStyles from '../styles/authCommonStyles'
import { FontAwesome } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  return (
    <View style={authCommonStyles.container}>
      <Title title="Register" />
      <TextInput style={authCommonStyles.textInput} placeholder="Username"></TextInput>
      <FontAwesome name='user' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput style={[authCommonStyles.textInput, authCommonStyles.extraMarginEmail]} placeholder="Email"></TextInput>

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Password"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <TextInput secureTextEntry={true} style={authCommonStyles.textInput} placeholder="Repeat password"></TextInput>
      <FontAwesome name='lock' size='20' style={authCommonStyles.txtInputIcon} />

      <Pressable style={authCommonStyles.btn} onPress={() => navigation.navigate('Login')}>
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