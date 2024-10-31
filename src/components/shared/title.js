import { StyleSheet, Text, View } from 'react-native'

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    }
})

export default Title
