import React, {useState} from 'react';
import {Title} from "../../components/Title";
import {StyledButton} from "../../components/StyledButton";
import {Image, StyleSheet, View} from "react-native";

const LIBERAL = require('../../assets/images/liberal_party.png');
const FACIST = require('../../assets/images/fascist_party.png');

export function InvestigatingLoyaltyConfirmScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const dismiss = () => {
        setLoading(true);
        sendCommand({
            action: "dismiss_loyalty_card",
        });
    };

    const selectedPlayer = state.game.selected_player;

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to investigate loyalty of {selectedPlayer}...</Title>
            </View>
        );
    } else {
        const selectedPlayerLoyality = state.game.players[selectedPlayer].role === "liberal" ? "liberal" : "fascists";
        return (
            <View style={styles.container}>
                <Title>Loyalty of player {selectedPlayer}</Title>
                <Image resizeMode="contain" style={styles.image} source={selectedPlayerLoyality == "liberal" ? LIBERAL : FACIST}/>
                <View style={styles.buttonContainer}>
                    <StyledButton text={"Dismiss"} onPress={dismiss} disabled={loading}/>
                </View>
            </View>
        );
    }
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

