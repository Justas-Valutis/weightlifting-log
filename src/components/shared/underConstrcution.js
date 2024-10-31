import { StyleSheet, Button, View } from 'react-native'
import React from 'react'
import Title from './title'

const UnderConstrcution = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title title="Under Construction" />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default UnderConstrcution

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})