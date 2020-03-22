import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from "../components/Logo";
import Line from "../components/Line";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Logo/>
            <Line/>
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
