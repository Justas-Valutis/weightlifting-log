import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ThemeView from './shared/themeView'
import TitleText from './shared/LineText'
import LineTex from './shared/LineText'
import tabsCommonstyles from '../styles/tabsCommonStyles'

const Subscriptions = () => {
    const [users, setUsers] = React.useState([]);

    return (
        <ThemeView>
            <ScrollView>
                <TitleText style={tabsCommonstyles.heading}>Subscriptions</TitleText>
                <LineTex>user1</LineTex>
                <LineTex>user1</LineTex>
            </ScrollView>
        </ThemeView>
    )
}

export default Subscriptions

const styles = StyleSheet.create({})