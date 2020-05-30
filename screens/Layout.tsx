import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BigLogo, SmallLogo} from "../components/Logo";
import {Line} from "../components/Line";

export function SmallLayout({children}) {
    return (
        <View style={styles.container}>
            <SmallLogo style={styles.smallLogo}/>
            <Line/>
            <View style={styles.childContainer}>
                {children}
            </View>
        </View>
    );
}

export function BigLayout({children}) {
    return (
        <View style={styles.container}>
            <BigLogo style={styles.bigLogo}/>
            <Line/>
            <View style={styles.childContainer}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FBB969",
        display: "flex",
        flexDirection: "column"
    },
    childContainer: {
        flex: 1,
        display: "flex",
        width: "100%"
    },
    bigLogo: {
        marginTop: 25,
        marginBottom: 25,
        width: 370,
        height: 200
    },
    smallLogo: {
        marginTop: 25,
        marginBottom: 10,
        width: 185/2,
        height: 100/2
    }
});
