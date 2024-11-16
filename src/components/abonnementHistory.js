import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import React from 'react';
import ThemeView from './shared/themeView';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import LineText from './shared/LineText';

const AbonnementHistory = () => {
    const abonnementen = [
        {
            id: 1,
            type: 'BJJ',
            duration: '1 month',
            price: 100,
            date: '2021-10-01',
            status: 'inactive',
        },
        {
            id: 2,
            type: 'Grappling',
            duration: '3 months',
            price: 250,
            date: '2021-11-01',
            status: 'active',
        },
        {
            id: 3,
            type: 'MMA',
            duration: '6 months',
            price: 500,
            date: '2021-12-01',
            status: 'active',
        }
    ];

    return (
        <ThemeView>
            <LineText style={tabsCommonstyles.heading}>Abonnement History</LineText>

            <View style={styles.container}>
                <FlatList
                    data={abonnementen}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.abonnement}>

                            <LineText style={styles.abonnementType}>{item.type}</LineText>
                            <View style={styles.abonnementDetails}>
                                <View style={styles.column}>
                                    <LineText style={styles.abonnementText}>{item.duration}</LineText>
                                </View>
                                <View style={styles.column}>
                                    <LineText style={styles.abonnementText}>{item.price} €</LineText>
                                </View>
                                <View style={styles.column}>
                                    <LineText style={styles.abonnementText}>{item.date}</LineText>
                                </View>
                                <View style={styles.abonnementStatus}>
                                    <LineText style={[styles.abonnementText, item.status === 'inactive' ? styles.inActive : null]}>{item.status}</LineText>
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
    inActive: {
        color: 'red',
    },
});
