import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const LIBERAL = require('../assets/images/liberal.png');
const FASCIST = require('../assets/images/fascist.png');

export function CardBox({card, disabled = false, onPress = null}) {

    if (onPress === null) {
        return <View style={styles.container}>
            <Image
                resizeMode="contain"
                source={card === "fascist" ? FASCIST : LIBERAL}
                style={{height: "100%", width: "100%"}}
            />
        </View>
    } else {
        return <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            <Image
                resizeMode="contain"
                source={card === "fascist" ? FASCIST : LIBERAL}
                style={{height: "100%", width: "100%"}}
            />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        width: 246/3,
        height: 361/3,
        marginBottom: 25,
        borderRadius: 9,
        overflow: "hidden"
    },
});

