import React from 'react';
import {Image, StyleSheet,} from 'react-native';

const LINE = require('../assets/images/line.png');


export function Line() {
    return (
        <Image
            resizeMode="contain"
            style={styles.hr}
            source={LINE}
        />
    )
}


const styles = StyleSheet.create({
    hr: {
        width: "90%",
        height: "10%",
    }
});
