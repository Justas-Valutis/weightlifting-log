import { StyleSheet, FlatList, View, Pressable, Dimensions, Text } from 'react-native'
import { React, useContext } from 'react'
import { BASE_URL } from '../../config/apiConfig'
import { AuthContext } from '../../context/AuthContext'
import TitleText from './LineText'

const SubscriptionList = ({ data, fetchData }) => {
    const { isAdmin } = useContext(AuthContext);

    const deleteSubscription = (id) => async () => {
        try {
            const response = await fetch(`${BASE_URL}subscription/delete/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            fetchData();
        } catch (err) {
            console.error('Error fetching data:', err.message);
        }
    }

    const activateSubscription = (id) => async () => {
        try {
            const response = await fetch(`${BASE_URL}subscription/activate/${id}`, {
                method: 'PATCH',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            fetchData();
        } catch (err) {
            console.error('Error fetching data:', err.message);
        }
    }

    return (
        <View style={styles.container}>
            {!data || data.length === 0 ? <TitleText style={styles.notFound}>No subscriptions found</TitleText> :
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.abonnement}>

                            <Text style={styles.abonnementTypeTxt}>{item.subscriptionTitle}</Text>
                            <View style={styles.abonnementDetails}>
                                <View style={styles.column}>
                                    <Text style={styles.abonnementText}>{item.datePurchased}</Text>
                                    <Text style={styles.abonnementText}>{item.dateExpires}</Text>
                                </View>
                                <View style={[styles.column, styles.amountPaid]}>
                                    <Text style={styles.abonnementText}>{item.amountPaid} €</Text>
                                </View>
                                <View style={styles.abonnementStatus}>
                                    <Text style={[styles.abonnementText, item.subscriptionStatus === 'ACTIVE' ? styles.activeTxt : styles.pendingOrExpired]}>{item.subscriptionStatus}</Text>
                                </View>
                            </View>

                            <View style={styles.DeleteActivateSection}>
                                {(item.subscriptionStatus === 'PENDING') ?
                                    <Pressable style={styles.btnDelete} onPress={deleteSubscription(item.id)}>
                                        <Text style={[styles.abonnementText, styles.txtWhite]}>Delete</Text>
                                    </Pressable> : null
                                }

                                {isAdmin && item.subscriptionStatus === 'PENDING' &&
                                    <Pressable style={[styles.btnActivate]} onPress={activateSubscription(item.id)}>
                                        <Text style={[styles.abonnementText, styles.txtWhite]}>Activate</Text>
                                    </Pressable>
                                }
                            </View>


                        </View>
                    )}
                />
            }
        </View>
    )
}

export default SubscriptionList
const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
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
        fontWeight: '500',
        color: 'black',
    },
    abonnementTypeTxt: {
        textAlign: 'center',
        fontSize: 20,
        color: 'blue',
        fontWeight: '600'
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
    pendingOrExpired: {
        color: 'red',
    },
    activeTxt: {
        color: 'darkgreen',
    },
    btnDelete: {
        backgroundColor: 'lightcoral',
        padding: 10,
        borderRadius: 5,
    },
    txtWhite: {
        color: 'white',
    },
    DeleteActivateSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
    },
    btnActivate: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        right: 10,
    },
    notFound: {
        padding: 10,
        textAlign: 'center',
        fontSize: 25,
    }
})