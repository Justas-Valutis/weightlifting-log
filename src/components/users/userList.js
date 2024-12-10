import { StyleSheet, Dimensions, View, FlatList, TextInput } from 'react-native'
import { React, useState } from 'react'
import { useFetch } from '../shared/useFetch';
import LineText from '../shared/LineText';
import tabsCommonstyles from '../../styles/tabsCommonStyles';

const UserList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const data = useFetch('user');

    if (!data) {
        return <LineText>Loading...</LineText>;
    }

    const users = Array.isArray(data.content) ? data.content : [];

    const filteredUsers = users.filter(user =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={tabsCommonstyles.container}>
            <TextInput
                style={tabsCommonstyles.textInput}
                placeholder="Search by username"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {filteredUsers.length === 0 ? (
                <LineText>No users found</LineText>
            ) : (
                <FlatList
                    style={styles.userContainer}
                    data={filteredUsers}
                    keyExtractor={(item) => item.userName}
                    renderItem={({ item }) => (
                        <View style={styles.user}>
                            <LineText>{item.userName}</LineText>
                            <LineText>{item.email}</LineText>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default UserList

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        gap: 5,
        width: width > 700 ? '100%' : '100%',
        margin: 0,
        flex: 1,
        justifyContent: 'space-between',
    },
    userText: {
        fontSize: 18,
    },
    userContainer: {
        width: width > 700 ? '50%' : "100%"
    }
})