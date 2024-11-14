import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import LineText from './shared/LineText';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import ThemeView from './shared/themeView';

const AddAbonnement = () => {
    //       Abonnement type selection
    const [showAList, setShowAList] = useState(false);
    const [selectedAbonnement, setSelectedAbonnement] = useState('');

    const abonnementTypes = ['BJJ', 'Grappling', 'MMA', 'Kids BJJ', 'All-in'];

    const handleAPress = (item) => {
        setSelectedAbonnement(item);
        setShowAList(false);
    };

    const [showDList, setShowDList] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState('');

    //       Abonnement duration selection
    const durations = ['1 month', '3 months', '6 months', '12 months'];

    const handleDPress = (item) => {
        setSelectedDuration(item);
        setShowDList(false);
    }

    //     Price calculation
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (selectedAbonnement && selectedDuration) {
            setPrice(100);
        } else {
            setPrice(0);
        }
    }, [selectedAbonnement, selectedDuration]);

    const handleBuyBtn = () => {
        if (Platform.OS === 'web') {
            const confirmed = window.confirm('Are you sure you want to buy?');
            if (confirmed) bought();
        } else {
            Alert.alert(
                'Are you sure you want to Buy?', '',
                [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            bought();
                        },
                    },
                ]
            );
        }
    }

    const bought = () => {
        setPrice(0);
        setSelectedAbonnement('');
        setSelectedDuration('');
        console.log('Buy Abonnement');
    }

    return (
        <ThemeView>
            <LineText style={tabsCommonstyles.heading}>Add Abonnement</LineText>

            <View style={styles.container}>
                <LineText style={tabsCommonstyles.subHeading}>Select Abonnement type</LineText>

                <TouchableOpacity onPress={() => setShowAList(!showAList)} style={[styles.list, styles.button, selectedAbonnement ? styles.selectedAbonnement : null]}>
                    <Text style={styles.buttonText}>{selectedAbonnement ? selectedAbonnement : 'Select Abonnement'}</Text>
                </TouchableOpacity>
                {showAList && (
                    <FlatList
                        style={[styles.list, styles.dropdown]}
                        data={abonnementTypes}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleAPress(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}

                <LineText style={tabsCommonstyles.subHeading}>Select Abonnement duration</LineText>

                <TouchableOpacity onPress={() => setShowDList(!showDList)} style={[styles.list, styles.button]}>
                    <Text style={styles.buttonText}>{selectedDuration ? selectedDuration : 'Select Duration'}</Text>
                </TouchableOpacity>
                {showDList && (
                    <FlatList
                        style={[styles.list, styles.dropdown]}
                        data={durations}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleDPress(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}

                {price > 0 && (
                    <View>
                        <LineText style={tabsCommonstyles.subHeading}>Price: {price} €</LineText>
                        <TouchableOpacity onPress={handleBuyBtn} style={[styles.button, styles.buyBTN]}>
                            <Text style={styles.buttonText}>Buy Abonnement</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

        </ThemeView>
    );
};

export default AddAbonnement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    list: {
        width: Platform.OS === 'web' ? '50%' : '100%',
    },
    dropdown: {
        position: 'absolute',
        zIndex: 1,
        width: Platform.OS === 'web' ? '50%' : '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    button: {
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    itemText: {
        color: '#000',
    },
    selectedAbonnement: {
        backgroundColor: '#28a745',
    },
    buyBTN: {
        backgroundColor: 'red',
    },
});
