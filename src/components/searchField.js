import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function SearchField({ query, setQuery }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FontAwesome name="search" size={20} color="white" style={styles.icon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search exercise"
                    placeholderTextColor="white"
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
    },
    searchBar: {
        flex: 1,
        height: '100%',
        paddingLeft: 10,
        fontSize: 20,
        color: 'white'
    },
    icon: {
        marginRight: 10,
    },
})