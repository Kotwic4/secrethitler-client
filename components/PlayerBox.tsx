import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function PlayerBox({player, userName, isAlive = true, vote = null}) {
    let voteLayer;

    if (vote !== null) {
        voteLayer = <View style={styles.voteLayer}><Text style={styles.voteLayerText}>{vote ? "YES" : "NO"}</Text></View>;
    }
    return <View style={[styles.container, !isAlive ? styles.notAlive : {}]}>
        <Text style={styles.text}>{player}</Text>
        {player === userName && <Text style={styles.youText}>{"(you)"}</Text>}
        {voteLayer}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        borderWidth: 1,
        backgroundColor: "#434343",
        marginBottom: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        position: "relative"
    },
    notAlive: {
        opacity: 0.5
    },
    text: {
        color: "white",
        fontSize: 20
    },
    voteLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    voteLayerText: {
        transform: [{ rotate: "-45deg" }],
        fontSize: 40,
        color: "rgba(255, 255, 255, 0.4)"
    },
    youText: {
        fontSize: 10,
        color: "white"
    }
});

