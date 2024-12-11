import { StyleSheet, Dimensions, View, FlatList, Pressable } from 'react-native'
import { React } from 'react'
import LineText from '../shared/LineText';
import tabsCommonstyles from '../../styles/tabsCommonStyles';

const UserList = ({ data, viewUserSubscriptions }) => {
    return (
        <View style={tabsCommonstyles.container}>
            {data.length === 0 ? (
                <LineText>No users found</LineText>
            ) : (
                <FlatList
                    style={styles.userContainer}
                    data={data}
                    keyExtractor={(item) => item.userName}
                    renderItem={({ item }) => (
                        <Pressable style={styles.user} onPress={viewUserSubscriptions}>
                            <LineText>{item.userName}</LineText>
                            <LineText>{item.email}</LineText>
                        </Pressable>
                    )}
                />
            )}
        </View>
    );
};

export default UserList

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        gap: 5,
        width: width > 700 ? '100%' : '100%',
        margin: 0,
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    userText: {
        fontSize: 18,
    },
    userContainer: {
        width: width > 700 ? '50%' : "100%",
        paddingTop: 10,
    }
})