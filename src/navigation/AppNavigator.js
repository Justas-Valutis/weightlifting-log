import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Unauthenticated from './Unauthenticated';
import Authenticated from './Authenticated';

export default function AppNavigator() {

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
