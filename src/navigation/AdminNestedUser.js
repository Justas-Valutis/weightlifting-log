import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../components/users/users';
import { React, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import SubscriptiontHistory from '../components/subscriptionHistory';

const AdminNestedUser = () => {
    const Stack = createNativeStackNavigator();
    const { isDark } = useContext(ThemeContext);


    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Users" component={Users} options={{ headerShown: false }} />
            <Stack.Screen name="UserSubscription" component={SubscriptiontHistory}
                initialParams={{ userId: 0, userName: '' }}
                options={({ route }) => ({
                    headerShown: true,
                    title: route.params?.userName + ' Subscriptions',
                    headerStyle: {
                        backgroundColor: isDark ? 'black' : 'white',
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: isDark ? 'white' : 'black',
                    },
                    headerTintColor: isDark ? 'white' : 'black', // Sets the back arrow color
                })}
            />
        </Stack.Navigator>
    )
}

export default AdminNestedUser