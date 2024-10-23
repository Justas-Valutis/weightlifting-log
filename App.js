import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import Register from './src/screens/register';

export default function App() {
  return (
  <View style={styles.container}>
    {/* <Login></Login> */}
    <Register/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fwff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
