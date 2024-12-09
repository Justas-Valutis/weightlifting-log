import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import React from 'react'

const Unauthenticated = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            {/* <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    )
}

export default Unauthenticated