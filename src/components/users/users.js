import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ThemeView from '../shared/themeView'
import TitleText from '../shared/LineText'
import tabsCommonstyles from '../../styles/tabsCommonStyles'
import UserList from './userList'

const Users = () => {
    return (
        <ThemeView>
            <ScrollView contentContainerStyle={tabsCommonstyles.container}>
                <TitleText style={tabsCommonstyles.heading}>Users</TitleText>
                <UserList />
            </ScrollView>
        </ThemeView>

    )
}

export default Users

const styles = StyleSheet.create({})