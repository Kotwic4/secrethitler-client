import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const YA = require('../assets/images/ya_card.png');
const NEIN = require('../assets/images/nein_card.png');
const DEAD = require('../assets/images/dead.png');

export function PlayerBox({player, userName, image = null, disabled = false, isAlive = true, vote = null, onPress = null, extraRole = null}) {
    let voteLayer;

    if (vote !== null) {
        voteLayer = <Image style={styles.voteLayer} source={vote ? YA : NEIN} />
    }

    if (onPress === null) {
        return <View style={[styles.container, !image ? styles.center : {}]}>
            {image && <Image source={image} style={styles.image}/>}
            {!isAlive && <Image source={DEAD} style={styles.notAlive}/>}
            {voteLayer}
            <Text style={styles.text}>{player}</Text>
            {player === userName && <Text style={styles.youText}>{"(you)"}</Text>}
            {extraRole && <Text style={styles.presidentOrChancellor}>{extraRole === "chancellor" ? "Chancellor" : "President"}</Text>}
        </View>
    } else {
        return <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, !image ? styles.center : {}]}>
            {image && <Image source={image} style={styles.image}/>}
            {!isAlive && <Image source={DEAD} style={styles.notAlive}/>}
            {voteLayer}
            <Text style={styles.text}>{player}</Text>
            {player === userName && <Text style={styles.youText}>{"(you)"}</Text>}
            {extraRole && <Text style={styles.presidentOrChancellor}>{extraRole  === "chancellor" ? "Chancellor" : "President"}</Text>}
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        width: 246/3,
        height: 361/3,
        backgroundColor: "#434343",
        marginBottom: 25,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 5,
        position: "relative",
        overflow: "hidden"
    },
    notAlive: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 5
    },
    text: {
        color: "black",
        fontWeight: "bold",
        textShadowColor: "white",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        fontSize: 20,
        zIndex: 4
    },
    voteLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    youText: {
        fontSize: 10,
        color: "black",
        marginBottom: 5,
        textShadowColor: "white",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        zIndex: 4
    },
    image: {
        width: 246/3,
        height: 361/3,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2
    },
    center: {
        justifyContent: "center"
    },
    presidentOrChancellor: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 3,
        color: "#434343",
        fontSize: 10,
        width: "100%",
        backgroundColor: "white",
        textAlign: "center"
    }
});

