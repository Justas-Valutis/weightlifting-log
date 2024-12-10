import { StyleSheet } from 'react-native';

const tabsCommonstyles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    title: {
        marginBottom: 20,
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
    },
    textCenter: {
        textAlign: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        width: 175,
        height: 32,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: 'black',
        fontSize: 14,
        fontWeight: '300',
    },
    container: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
})

export default tabsCommonstyles