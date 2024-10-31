import { View, StyleSheet, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useState, useContext } from 'react';
import SearchField from './shared/searchField';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from '../context/ThemeContext';
import ThemeView from './shared/themeView';

const Home = () => {
    const [query, setQuery] = useState('');
    const Tab = createBottomTabNavigator();
    const { theme } = useContext(ThemeContext);
    return (
        <ThemeView>
            <View style={[styles.container, { backgroundColor: theme }]}>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Exercise Category</Text>
                    </Pressable>
                </View>
                <SearchField query={query} setQuery={setQuery} />
            </View>
        </ThemeView>
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
