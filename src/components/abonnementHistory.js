import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import React, { useContext, useState, useCallback } from 'react';
import ThemeView from './shared/themeView';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import LineText from './shared/LineText';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../config/apiConfig';
import { useFocusEffect } from '@react-navigation/native';



const AbonnementHistory = () => {

    const { userId } = useContext(AuthContext);
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
            <LineText style={tabsCommonstyles.heading}>Abonnement History</LineText>
            <View style={styles.container}>
                {
                    !abonnementen || abonnementen.length === 0 ?
                        <LineText style={tabsCommonstyles.subHeading}>No subscriptions found</LineText> : null
                }
                <FlatList
                    data={abonnementen}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.abonnement}>

                            <LineText style={styles.abonnementType}>{item.subscriptionTitle}</LineText>
                            <View style={styles.abonnementDetails}>
                                <View style={styles.column}>
                                    <LineText style={styles.abonnementText}>{item.datePurchased}</LineText>
                                    <LineText style={styles.abonnementText}>{item.dateExpires}</LineText>
                                </View>
                                <View style={[styles.column, styles.amountPaid]}>
                                    <LineText style={styles.abonnementText}>{item.amountPaid} €</LineText>
                                </View>
                                <View style={styles.abonnementStatus}>
                                    <LineText style={[styles.abonnementText, item.subscriptionStatus !== 'ACTIVE' ? styles.pending : null]}>{item.subscriptionStatus}</LineText>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ThemeView>
    );
};

export default AbonnementHistory;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    abonnement: {
        flexDirection: 'column',
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        alignSelf: 'center',
        width: width > 1000 ? '80%' : '100%',
        gap: 10,
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    amountPaid: {
        alignItems: 'center'
    },
    abonnementText: {
        fontSize: 18,
    },
    abonnementType: {
        textAlign: 'center',
        fontSize: 20,
        color: 'blue',
    },
    abonnementDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    abonnementStatus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginEnd: 10,
    },
    pending: {
        color: 'red',
    },
});
