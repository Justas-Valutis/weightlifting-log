import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const SubscribtionsStatusBTN = ({ setStatus, status, title }) => {
    return (
        <Pressable style={[styles.btn, { backgroundColor: status === title ? 'lightgreen' : 'lightblue' }]}
            onPress={() => setStatus(title)}>
            <Text style={styles.btnText} >{title}</Text>
        </Pressable>
    )
}

export default SubscribtionsStatusBTN

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '500',
    },
})