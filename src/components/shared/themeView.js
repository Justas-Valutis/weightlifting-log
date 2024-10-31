import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

export default function ThemeView({ children }) {
    const { theme, isDark } = useContext(ThemeContext);

    return (
        <View style={{ backgroundColor: theme, flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={theme === isDark ? 'light-content' : 'dark-content'} />
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
    }
})