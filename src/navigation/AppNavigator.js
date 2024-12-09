import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home';
import Profile from '../components/profile';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '../context/ThemeContext';
import AddAbonnement from '../components/addAbonnement';
import AbonnementHistory from '../components/abonnementHistory';
import Unauthenticated from './Unauthenticated';
import Authenticated from './Authenticated';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Authenticated />
            ) : (
                <Unauthenticated />
            )}
        </NavigationContainer>
    );
}
