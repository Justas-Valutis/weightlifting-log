import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home';
import SearchField from '../components/searchField';
import Profile from '../components/profile';
import UnderConstrcution from '../components/underConstrcution';
import { AuthContext } from '../context/AuthContext';
import Login from '../screens/login';
import RecoverPassword from '../screens/recoverPassword';
import Register from '../screens/register';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'black',
                        borderTopColor: 'gray',
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'black', // This will set the background color for all screens
                    },
                }}>
                    <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name="home" color={focused ? '#B0B0B0' : 'gray'} size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Search" component={SearchField}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name="search" color={focused? '#B0B0B0' : 'gray'} size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen name="AddExercise" component={UnderConstrcution}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name="add-circle-sharp" color={focused ? '#B0B0B0' : 'gray'}
                                    size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Profile" component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name="person" color={focused? '#B0B0B0' : 'gray'} size={24} />
                            ),
                        }}
                    />

                </Tab.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
