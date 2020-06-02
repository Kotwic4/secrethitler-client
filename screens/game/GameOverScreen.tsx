import React from 'react';
import {Title} from "../../components/Title";
import {StyledButton} from "../../components/StyledButton";
import {Image, StyleSheet, View} from "react-native";


const LIBERAL = require('../../assets/images/liberal_party.png');
const FACIST = require('../../assets/images/fascist_party.png');

export function GameOverScreen({state, onLeaveRoom}) {

    const winner = state.game.winner;
    return (
        <View style={styles.container}>
            <Title>Game was won by:</Title>
            <Image style={styles.partyLayer} source={winner == "liberal" ? LIBERAL : FACIST}/>
            <StyledButton
                text="Leave room"
                onPress={onLeaveRoom}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    partyLayer: {
        width: "50%",
        height: "50%",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
});

