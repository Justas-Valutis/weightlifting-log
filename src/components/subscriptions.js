import { StyleSheet, View, Pressable, Text } from 'react-native'
import { React, useState, useCallback } from 'react'
import ThemeView from './shared/themeView'
import TitleText from './shared/LineText'
import tabsCommonstyles from '../styles/tabsCommonStyles'
import SubscriptionList from './shared/subscriptionList'
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../config/apiConfig';
import { useFetch } from './shared/useFetch'


const Subscriptions = () => {
    const [status, setStatus] = useState('pending');
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
                    <Pressable style={styles.btn} onPress={() => setStatus('pending')}>
                        <Text style={styles.btnText} >Pending</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={() => setStatus('active')}>
                        <Text style={styles.btnText}>Active</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={() => setStatus('expired')}>
                        <Text style={styles.btnText}>Expired</Text>
                    </Pressable>
                </View>

                <TitleText style={tabsCommonstyles.subHeading}>Selected {status}</TitleText>

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
        backgroundColor: 'lightblue',
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