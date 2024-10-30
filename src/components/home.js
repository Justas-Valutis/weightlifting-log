import { View, StyleSheet, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import SearchField from './searchField';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = () => {
    const [query, setQuery] = useState('');
    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Exercise Category</Text>
                </Pressable>
            </View>
            <SearchField query={query} setQuery={setQuery} />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    btnContainer: {
        marginBottom: 10,
    },
    btn: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Roboto, Arial, sans-serif',
        textAlign: 'center',
    },
});
