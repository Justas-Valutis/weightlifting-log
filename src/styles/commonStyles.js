import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        bordeColor: 'black',
        marginBottom: 20,
        borderRadius: 5,
        width: 200,
        height: 40,
        padding: 10,
    },
    btn: {
        backgroundColor: 'rgb(33, 140, 250)',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        width: 200,
        textAlign: 'center',
    },
    btnText: {
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: '-apple-system',
    }
})

export default commonStyles