import React from 'react';
import {Title} from "../../../components/Title";
import {StyledButton} from "../../../components/StyledButton";
import {Image, StyleSheet, View} from "react-native";


const LIBERAL = require('../../../assets/images/liberal_party.png');
const FACIST = require('../../../assets/images/fascist_party.png');

export function GameOverScreen({state, onLeaveRoom}) {

    const winner = state.game.winner;
    return (
        <View style={styles.container}>
            <Title>Game won by:</Title>
            <Image resizeMode="contain" style={styles.image} source={winner == "liberal" ? LIBERAL : FACIST}/>
            <View style={styles.buttonContainer}>
                <StyledButton
                    text="Leave room"
                    onPress={onLeaveRoom}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    image: {
        width: "50%",
        height: "48%",
        borderWidth: 1,
        borderColor: "#434343",
        borderRadius: 5,
        overflow: "hidden"
    },
    buttonContainer: {
        position: "absolute",
        bottom: 8,
        left: 0,
        width: "100%"
    }
});

