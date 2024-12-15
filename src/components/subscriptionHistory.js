import { StyleSheet, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import ThemeView from './shared/themeView';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import LineText from './shared/LineText';
import { BASE_URL } from '../config/apiConfig';
import { useFocusEffect } from '@react-navigation/native';
import SubscriptionList from './shared/subscriptionList';



const SubscriptiontHistory = ({ route }) => {
    const { userId, userName } = route.params;
    const [abonnementen, setAbonnementen] = useState();

    useFocusEffect(
        useCallback(() => {
            if (userId) {
                fetchData();
            }
        }, [userId])
    );

    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}subscription/userId=${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.status === 204) {
                setAbonnementen([]);
                return;
            }
            const result = await response.json();
            setAbonnementen(result);
        } catch (err) {
            console.error('Error fetching data:', err.message);
        }
    };

    return (
        <ThemeView>
            <LineText style={tabsCommonstyles.heading}>Subscription History</LineText>
            <View style={styles.container}>
                <SubscriptionList data={abonnementen} fetchData={fetchData} userName={userName} />
            </View>
        </ThemeView>
    );
};
export default SubscriptiontHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
