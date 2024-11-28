import { View, Text } from 'react-native'
import React from 'react'
import authCommonStyles from '../../styles/authCommonStyles'

export default function ErrorText({ error }) {
    return (
        <View>
            {error ? <Text style={authCommonStyles.error}>{error}</Text> : null}
        </View>
    )
}