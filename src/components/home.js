import { StyleSheet, Platform, Image, Dimensions, ScrollView, View } from 'react-native'
import React from 'react'
import ThemeView from './shared/themeView';
import LineText from './shared/LineText';
import TitleText from './shared/LineText';
import tabsCommonstyles from '../styles/tabsCommonStyles';

const { width } = Dimensions.get('window');


const Home = () => {
    const { height, width } = Dimensions.get('window');

    return (
        <ThemeView>
            <ScrollView>
                <LineText style={tabsCommonstyles.heading}>Welcome to BJJ Belgium</LineText>
                <Image
                    style={[styles.logo, { height: Platform.OS === 'web' ? width * 0.25 : height * 0.3 }]}
                    source={require('../../src/assets/bjj-cover.webp')}
                    resizeMode={Platform.OS === 'web' ? "cover" : "contain"}
                />

                <TitleText style={tabsCommonstyles.subHeading}>Fighting Times</TitleText>

                <View style={width > 700 ? styles.fTimesContainerWeb : styles.fTimesContainerWebGSM}>
                    <View style={styles.fightTimeContainer}>
                        <TitleText style={styles.section}>Brazilian Jiu-Jitsu</TitleText>
                        <LineText>Tuesday: 19h00-20h30</LineText>
                        <LineText>Thursday: 19h00-20h30</LineText>
                    </View>
                    <View style={styles.fightTimeContainer}>
                        <TitleText style={styles.section}>Grappling</TitleText>
                        <LineText>Monday: 19h00-20h30</LineText>
                        <LineText>Friday: 19h00-20h30</LineText>
                    </View>
                    <View style={styles.fightTimeContainer}>
                        <TitleText style={styles.section}>MMA</TitleText>
                        <LineText>Wednesday: 19h00-20h30</LineText>
                        <LineText>Saturday: 13h00 - 14h30</LineText>
                    </View>
                    <View style={styles.fightTimeContainer}>
                        <TitleText style={styles.section}>Kids Brazilian Jiu-Jitsu</TitleText>
                        <LineText >Monday: 18h00-19h00</LineText>
                        <LineText>Wednesday: 18h00-19h00</LineText>
                    </View>
                    <View style={styles.fightTimeContainer}>
                        <TitleText style={styles.section}>Open Mat</TitleText>
                        <LineText>Saturday: 11h30-12h30 (members only)</LineText>
                    </View>
                    <LineText style={[styles.section, styles.fightTimeContainer]}>Private lessons are possible</LineText>
                </View>

                <View style={styles.adressContact}>
                    <View>
                        <TitleText style={tabsCommonstyles.subHeading}>Coaches</TitleText>
                        <LineText>- Kenzo Mongo</LineText>
                        <LineText>- Pipo Weirdo</LineText>
                    </View>

                    <View>
                        <TitleText style={tabsCommonstyles.subHeading}>Address</TitleText>
                        <LineText >UFC 309, Octagon, Belgium</LineText>
                    </View>
                    <View>
                        <TitleText style={tabsCommonstyles.subHeading}>Contact</TitleText>
                        <LineText>Email: TextMePlease@SubscribePlease.com</LineText>
                        <LineText>GSM: 112</LineText>
                    </View>
                </View>

            </ScrollView>
        </ThemeView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    section: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        marginVertical: 2,
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    fTimesContainerWeb: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    fTimesContainerWebGSM: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    adressContact: {
        borderTopWidth: 2,
        borderColor: 'gray',
        display: 'flex',
        marginTop: 15,
        flexDirection: width > 700 ? 'row' : 'column',
        justifyContent: width > 700 ? 'space-around' : 'flex-start',
    },
    fightTimeContainer: {
        width: width > 700 ? '30%' : '100%',
        marginBottom: 20,
    }
});
