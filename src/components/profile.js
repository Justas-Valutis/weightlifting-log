import { StyleSheet, Text, SafeAreaView, Button, Alert, Platform } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        if (Platform.OS === 'web') {
            const confirmed = window.confirm('Are you sure you want to logout?');
            if (confirmed) logout();
        } else {
            Alert.alert(
                'Are you sure you want to logout?', '',
                [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            logout();
                        },
                    },
                ]
            );
        }
    };

    return (
        <SafeAreaView>
            <Text>profile</Text>
            <Button title="Logout" onPress={handleLogout} />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})