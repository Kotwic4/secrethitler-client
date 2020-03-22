import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CourierText} from '../components/CourierText'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <CourierText>Settings</CourierText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FBB969",
    },
});
