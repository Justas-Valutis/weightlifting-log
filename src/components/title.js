import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    }
})
