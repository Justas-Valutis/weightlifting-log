import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform } from 'react-native';
import React, { useState } from 'react';
import LineText from './shared/LineText';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import ThemeView from './shared/themeView';
import TitleText from './shared/TitleText';

const AddAbonnement = () => {
    const [showAList, setShowAList] = useState(false);
    const [selectedAbonnement, setSelectedAbonnement] = useState('');

    const abonnementTypes = ['BJJ', 'Grappling', 'MMA', 'Kids BJJ', 'All-in'];

    const handlePress = (item) => {
        setSelectedAbonnement(item);
        setShowAList(false);
    };

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
                            <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}

                <LineText style={tabsCommonstyles.subHeading}>Select Abonnement duration</LineText>

                <TouchableOpacity style={[styles.list, styles.button]}>
                    <Text style={styles.buttonText}>Select Duration</Text>
                </TouchableOpacity>

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
});
