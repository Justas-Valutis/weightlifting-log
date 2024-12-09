import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/home';
import Profile from '../components/profile';
import AddAbonnement from '../components/addAbonnement';
import AbonnementHistory from '../components/abonnementHistory';
import { ThemeProvider } from '../context/ThemeContext';

const Authenticated = () => {
    const Tab = createBottomTabNavigator();

    return (
        <ThemeProvider>
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

                <Tab.Screen name="abonnementHistory" component={AbonnementHistory}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="cart" color={focused ? '#B0B0B0' : 'gray'} size={24} />
                        ),
                    }}
                />

                <Tab.Screen name="AddAbonnement" component={AddAbonnement}
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
                            <Ionicons name="person" color={focused ? '#B0B0B0' : 'gray'} size={24} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </ThemeProvider>
    )
}

export default Authenticated