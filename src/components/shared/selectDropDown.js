import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, Platform } from 'react-native';

const SelectDropdown = ({
    options,
    selectedOption,
    onSelect,
    placeholder,
    buttonStyle,
    buttonTextStyle,
    dropdownStyle,
    itemStyle,
    itemTextStyle,
}) => {
    const [showList, setShowList] = useState(false);

    const handlePress = (item) => {
        onSelect(item);
        setShowList(false);
    };

    return (
        <View style={styles.dropdownContainer}>
            <TouchableOpacity
                onPress={() => setShowList(!showList)}
                style={[styles.button, buttonStyle, selectedOption ? styles.selectedOption : null]}
            >
                <Text style={[styles.buttonText, buttonTextStyle]}>{selectedOption ? selectedOption : placeholder}</Text>
            </TouchableOpacity>
            {showList && (
                <View style={styles.dropdownWrapper}>
                    <FlatList
                        style={[styles.dropdown, dropdownStyle]}
                        data={options}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePress(item)} style={[styles.item, itemStyle]}>
                                <Text style={[styles.itemText, itemTextStyle]}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default SelectDropdown;

const styles = StyleSheet.create({
    dropdownContainer: {
        width: Platform.OS === 'web' ? '50%' : '100%',
        marginVertical: 10,
        position: 'relative',
    },
    button: {
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdownWrapper: {
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 1,
    },
    dropdown: {
        maxHeight: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        color: '#000',
    },
    selectedOption: {
        backgroundColor: '#28a745',
    },
});
