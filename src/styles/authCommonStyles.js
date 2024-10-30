import { StyleSheet } from 'react-native';

const authCommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fwff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        bordeColor: 'black',
        marginBottom: 5,
        borderRadius: 10,
        width: 220,
        height: 45,
        padding: 10,
    },
    btn: {
        backgroundColor: 'rgb(33, 140, 250)',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        width: 220,
        textAlign: 'center',
    },
    btnText: {
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: '-apple-system',
    },
    link: {
        color: 'rgb(33, 140, 250)',
        textAlign: 'center',
        marginTop: 10,
    },
    txtBelowButton: {
        marginTop: 10
    },
    txtInputIcon: {
        position: 'relative',
        bottom: 35,
        left: 90,
    },
    extraMarginEmail: {
        marginBottom: 20,
    }
})

export default authCommonStyles