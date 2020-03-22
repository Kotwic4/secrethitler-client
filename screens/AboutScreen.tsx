import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CourierText} from '../components/CourierText'
import Logo from "../components/Logo";
import Line from "../components/Line";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Logo/>
            <Line/>
            <CourierText>SECRET HITLER © 2016–2020 GOAT, WOLF,</CourierText>
            <CourierText> & CABBAGE ˙ CC SA–BY–NC 4.0 SECRETHITLER.COM </CourierText>
            <CourierText>SECRET HITLER MOBILE © 2020 RADEK, DAREK & MAREK ˙ MIT</CourierText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FBB969",
    }
});
