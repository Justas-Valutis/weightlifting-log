import { StyleSheet, View, TextInput } from 'react-native'
import { React, useState } from 'react'
import ThemeView from '../shared/themeView'
import TitleText from '../shared/LineText'
import tabsCommonstyles from '../../styles/tabsCommonStyles'
import UserList from './userList'
import { useFetch } from '../shared/useFetch';
import LineText from '../shared/LineText';


const Users = () => {
    const data = useFetch('user');
    const [searchQuery, setSearchQuery] = useState('');

    if (!data) {
        return <LineText>Loading...</LineText>;
    }

    const users = Array.isArray(data.content) ? data.content : [];

    const filteredUsers = users.filter(user =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const viewUserSubscriptions = () => {
        console.log('View user subscriptions');
    }


    return (
        <ThemeView>
            <View contentContainerStyle={tabsCommonstyles.container}>
                <TitleText style={tabsCommonstyles.heading}>Users</TitleText>

                <TextInput
                    style={[tabsCommonstyles.textInput, styles.center]}
                    placeholder="Search by username"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <UserList data={filteredUsers} viewUserSubscriptions={viewUserSubscriptions} />
            </View>
        </ThemeView>

    )
}

export default Users

const styles = StyleSheet.create({
    center: {
        alignSelf: 'center',
    }
})