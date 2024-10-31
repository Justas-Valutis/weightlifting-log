import { Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function TitleText({ children, style }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <Text style={[style, { color: isDark ? 'gray' : 'black', fontSize: 16, fontWeight: '400', }]}>{children}</Text>
    )
}