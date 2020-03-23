import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BigLogo, SmallLogo} from "../components/Logo";
import {Line} from "../components/Line";

export function SmallLayout({children}) {
    return (
        <View style={styles.container}>
            <SmallLogo/>
            <Line/>
            {children}
        </View>
    );
}

export function BigLayout({children}) {
    return (
        <View style={styles.container}>
            <BigLogo/>
            <Line/>
            {children}
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
