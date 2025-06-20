import { StyleSheet, Text, View, Pressable, FlatList, Dimensions, Alert, Platform } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import LineText from './shared/LineText';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import ThemeView from './shared/themeView';
import { useFetch } from './shared/useFetch';
import { BASE_URL } from '../config/apiConfig';
import { AuthContext } from '../context/AuthContext';
import DropdownSelector from './shared/DropDownSelector';

const AddSubscription = () => {

    const { userId } = useContext(AuthContext);

    const [showSubscriptionList, setShowSubscriptionList] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState('');
    const [price, setPrice] = useState(0);
    const [subscriptionTypeId, setSubscriptionTypeId] = useState(0);
    const [showDurationList, setShowDurationList] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState('');
    const subscriptionTypes = useFetch('subscriptiontype/types');
    const durations = useFetch('subscriptiontype/durations');

    const handleSubscriptionPress = (item) => {
        setSelectedSubscription(item);
        setShowSubscriptionList(false);
    };

    const handleDurationPress = (item) => {
        setSelectedDuration(item);
        setShowDurationList(false);
    }

    const sendSubscriptionRequest = async () => {
        try {
            const response = await fetch(`${BASE_URL}subscriptiontype/type${selectedSubscription}/duration${selectedDuration}`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setPrice(data.pricePerMonth);
            setSubscriptionTypeId(data.id);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    //     Price calculation
    useEffect(() => {
        if (selectedSubscription && selectedDuration) {
            sendSubscriptionRequest();
        } else {
            setPrice(0);
        }
    }, [selectedSubscription, selectedDuration]);

    const handleBuyBtn = () => {
        if (Platform.OS === 'web') {
            const confirmed = window.confirm('Are you sure you want to buy?');
            if (confirmed) {
                resetValues();
                postAbonnement();
            }
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
                            resetValues();
                            postAbonnement();
                        },
                    },
                ]
            );
        }
    }

    const postAbonnement = async () => {
        const abonnement = {
            userId,
            subscriptionTypeId
        }

        try {
            const response = await fetch(`${BASE_URL}subscription/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(abonnement),
            });
            if (response.status !== 201) {
                throw new Error('Abonnement could not be added in the server' + response.statusText);
            }

            console.log('Response:', response);

        } catch (error) {
            console.error('Error:', error.message);
        }


    }

    const resetValues = () => {
        setPrice(0);
        setSelectedSubscription('');
        setSelectedDuration('');

    }

    return (
        <ThemeView>
            <LineText style={tabsCommonstyles.heading}>Add Subscription</LineText>

            <View style={styles.container}>
                <LineText style={tabsCommonstyles.subHeading}>Select Subscription type</LineText>

                <Pressable onPress={() => setShowSubscriptionList(!showSubscriptionList)} style={[styles.list, styles.button, selectedSubscription ? styles.selectedSubscription : null]}>
                    <Text style={styles.buttonText}>{selectedSubscription ? selectedSubscription : 'Select Subscription'}</Text>
                </Pressable>
                {showSubscriptionList && (
                    <FlatList
                        style={[styles.list, styles.dropdown]}
                        data={subscriptionTypes}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => handleSubscriptionPress(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </Pressable>
                        )}
                    />
                )}


                <LineText style={tabsCommonstyles.subHeading}>Select Subscription duration</LineText>

                <Pressable onPress={() => setShowDurationList(!showDurationList)} style={[styles.list, styles.button]}>
                    <Text style={styles.buttonText}>{selectedDuration ? selectedDuration : 'Select Duration'}</Text>
                </Pressable>
                {showDurationList && (
                    <FlatList
                        style={[styles.list, styles.dropdown]}
                        data={durations}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => handleDurationPress(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </Pressable>
                        )}
                    />
                )}

                {/* //PROBLEEM WITH OVERLAYING OTHER ELEMNTS ONCE DROPDOWN IS OPEN */}

                {/* <DropdownSelector
                    header="Select Subscription Type"
                    dropdownBtnText="Select Subscription"
                    selected={selectedSubscription}
                    data={subscriptionTypes}
                    setSelected={setSelectedSubscription}
                />
                <DropdownSelector
                    header="Select Subscription Duration"
                    dropdownBtnText="Select Duration"
                    selected={selectedDuration}
                    data={durations}
                    setSelected={setSelectedDuration}
                /> */}

                {price > 0 && (
                    <View>
                        <LineText style={tabsCommonstyles.subHeading}>Monthly price: {price} €</LineText>
                        <Pressable onPress={handleBuyBtn} style={[styles.button, styles.buyBTN]}>
                            <Text style={styles.buttonText}>Buy Abonnement</Text>
                        </Pressable>
                    </View>
                )}
            </View>

        </ThemeView>
    );
};

export default AddSubscription;

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
