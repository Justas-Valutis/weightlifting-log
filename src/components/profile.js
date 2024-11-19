import { StyleSheet, Text, Alert, View, Pressable, TextInput, Dimensions, Platform} from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import ThemeView from './shared/themeView';
import tabsCommonstyles from '../styles/tabsCommonStyles';
import TitleText from './shared/TitleText';
import LineText from './shared/LineText';

const Profile = () => {
    const { logout } = useContext(AuthContext);
    const { setThemeLight, setThemeDark } = useContext(ThemeContext);

    const [username, setUsername] = useState('username');
    const [email, setEmail] = useState('email');
    const [validUsername, setValidUsername] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);

    const updateUsername = (username) => () => {
        if (username.trim().length > 3) {
            setValidUsername(true);

        } else {
            setValidUsername(false);
        }
    }

    const updateEmail = (email) => () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            setValidEmail(true);
            //update email
        } else {
            setValidEmail(false);
        }
    }

    const updatePassword = () => {
        if (isNewPasswordValid()) {
            setValidPassword(true)
            //check if old password is correct
            //update password
        } else {
            setValidPassword(false);
        }
    }

    const isNewPasswordValid = () => {
        return newPassword.trim().length > 4 && confirmNewPassword.trim().length > 4 && newPassword === confirmNewPassword;
    }

    const handleLogout = () => {
        if (Platform.OS === 'web') {
            const confirmed = window.confirm('Are you sure you want to logout?');
            if (confirmed) logout();
        } else {
            Alert.alert(
                'Are you sure you want to logout?', '',
                [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            logout();
                        },
                    },
                ]
            );
        }
    };

    return (
        <ThemeView>
            <TitleText style={tabsCommonstyles.title}>Profile</TitleText>

            <View style={styles.themeContainer}>
                <LineText>Choose theme</LineText>

                <View style={styles.themeBtnContainer}>
                    <Pressable style={styles.lightThemeBTN} onPress={setThemeLight}>
                        <Text style={[tabsCommonstyles.text, tabsCommonstyles.textCenter]}>Light</Text>
                    </Pressable>

                    <Pressable style={styles.darkThemeBTN} onPress={setThemeDark}>
                        <Text style={[tabsCommonstyles.text, tabsCommonstyles.textCenter, styles.grayText]}>Dark</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.userContainer}>
                <TitleText style={styles.title}>User info</TitleText>

                <View style={styles.profileRow}>
                    <LineText>Username</LineText>
                    <TextInput placeholder={username} style={tabsCommonstyles.textInput} onChangeText={text => setUsername(text)} />
                    <Pressable style={[styles.darkThemeBTN, styles.backgroundGray]} onPress={updateUsername(username)}>
                        <Text style={[tabsCommonstyles.text, tabsCommonstyles.textCenter, styles.whiteText]}>Change</Text>
                    </Pressable>
                </View>
                {!validUsername && (
                    <Text style={styles.error}>
                        Username must be at least 4 characters long
                    </Text>
                )}


                <View style={styles.profileRow}>
                    <LineText>Email        </LineText>
                    <TextInput placeholder={email} style={tabsCommonstyles.textInput} onChangeText={text => setEmail(text)} />
                    <Pressable style={[styles.darkThemeBTN, styles.backgroundGray]} onPress={updateEmail(email)}>
                        <Text style={[tabsCommonstyles.text, tabsCommonstyles.textCenter, styles.whiteText]}>Change</Text>
                    </Pressable>
                </View>

                {!validEmail && (
                    <Text style={styles.error}>
                        Please enter a valid email address
                    </Text>
                )}
            </View>

            <View>
                <TitleText style={styles.title}>New Password?</TitleText>

                <View style={styles.profileRow}>
                    <LineText>Old Password</LineText>
                    <TextInput placeholder='old password' style={tabsCommonstyles.textInput} onChangeText={text => setOldPassword(text)} />
                </View>

                <View style={styles.profileRow}>
                    <LineText>New Password</LineText>
                    <TextInput placeholder='new password' style={tabsCommonstyles.textInput} onChangeText={text => setNewPassword(text)} />
                </View>

                <View style={styles.profileRow}>
                    <LineText>New Password</LineText>
                    <TextInput placeholder='repeat password' style={tabsCommonstyles.textInput} onChangeText={text => setConfirmNewPassword(text)} />
                </View>

                <Pressable style={[styles.darkThemeBTN, styles.backgroundGray, styles.btnChangePsw]} onPress={updatePassword}>
                    <Text style={[tabsCommonstyles.text, tabsCommonstyles.textCenter, styles.whiteText]}>Change password</Text>
                </Pressable>
                {!validPassword && (
                    <Text style={styles.error}>
                        Passwords must be at least 5 characters long and match
                    </Text>
                )}
            </View>

            <View style={{ flex: 1 }}></View>

            <View style={styles.logoutBtnContainer}>
                <Pressable onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </Pressable>
            </View>
        </ThemeView>
    )
}

export default Profile

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    title: {
        marginBottom: 15,
    },
    // theme styles
    themeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: width < 700 ? 'space-between' : 'space-evenly',
        marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    themeBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    darkThemeBTN: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    lightThemeBTN: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
    },
    grayText: {
        color: 'gray',
    },
    // user styles
    userContainer: {
        marginBottom: 20,
    },
    whiteText: {
        color: 'white',
    },
    backgroundGray: {
        backgroundColor: 'gray',
    },
    profileRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: width < 700 ? 'space-between' : 'center',
        alignItems: 'center',
        marginBottom: 10,
        gap: width > 700 ? 30 : 0,
    },
    btnChangePsw: {
        width: 250,
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    // logout styles
    logoutBtnContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    logoutButtonText: {
        color: '#007AFF',
        fontSize: 20,
        textAlign: 'center',
    },
    // error styles
    error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
    },

})