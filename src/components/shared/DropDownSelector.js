import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import LineText from './LineText';
import tabsCommonstyles from '../../styles/tabsCommonStyles';

const DropdownSelector = ({ header, dropdownBtnText, selected, data, setSelected }) => {
    const [showList, setShowList] = useState(false);

    const handlePress = (item) => {
        setSelected(item);
        setShowList(false);
    };

    return (
        <View style={{ width: '100%', display: 'flex', alignItems: 'center', zIndex: 1 }}>
            <LineText style={tabsCommonstyles.subHeading}>{header}</LineText>

            <TouchableOpacity onPress={() => setShowList(!showList)} style={[styles.list, styles.button, selected ? styles.selected : null]}>
                <Text style={styles.buttonText}>{selected ? selected : `${dropdownBtnText}`}</Text>
            </TouchableOpacity>

            {showList && (
                <FlatList
                    style={[styles.list, styles.dropdown]}
                    data={data}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    list: {
        width: width > 700 ? '50%' : '100%',
    },
    dropdown: {
        position: 'absolute',
        zIndex: 1,
        width: width > 700 ? '50%' : '100%',
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
    selectedSubscription: {
        backgroundColor: '#28a745',
    },
    buyBTN: {
        backgroundColor: 'red',
    },
});

export default DropdownSelector;
