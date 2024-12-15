import { StyleSheet, View, Pressable, Text } from 'react-native'
import { React, useState, useCallback } from 'react'
import ThemeView from './shared/themeView'
import TitleText from './shared/LineText'
import tabsCommonstyles from '../styles/tabsCommonStyles'
import SubscriptionList from './shared/subscriptionList'
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../config/apiConfig';
import SubscrbtionStatusBTN from './shared/subscribtionsStatusBTN'

const Subscriptions = () => {
    const [status, setStatus] = useState('Pending');
    const [subscriptions, setSubscriptions] = useState();

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [status])
    );

    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}subscription/status=${status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.status === 204) {
                setSubscriptions([]);
                return;
            }
            const result = await response.json();
            setSubscriptions(result);
        } catch (err) {
            console.error('Error fetching data:', err.message);
        }
    };

    return (
        <ThemeView>

            <View style={styles.container}>
                <TitleText style={tabsCommonstyles.heading}>Pending Subscriptions</TitleText>

                <View style={styles.btnContainer}>
                    <SubscrbtionStatusBTN setStatus={setStatus} status={status} title='Pending' />
                    <SubscrbtionStatusBTN setStatus={setStatus} status={status} title='Active' />
                    <SubscrbtionStatusBTN setStatus={setStatus} status={status} title='Expired' />
                </View>

                <SubscriptionList data={subscriptions} fetchData={fetchData} />
            </View>
        </ThemeView>
    )
}

export default Subscriptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '500',
    },
    notFound: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    }
})