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
                <Title>Waiting for president ({state.game.president}) to investigate loyalty of player
                    ({selectedPlayer})...</Title>
            </View>
        );
    } else {
        const selectedPlayerLoyality = state.game.players[selectedPlayer].role === "liberal" ? "liberal" : "fascists";
        return (
            <View style={styles.container}>
                <Title>Loyalty of player ({selectedPlayer}) is:</Title>
                <Image style={styles.partyLayer} source={selectedPlayerLoyality == "liberal" ? LIBERAL : FACIST}/>
                <StyledButton text={"Dismiss"} onPress={dismiss} disabled={loading}/>
            </View>
        );
    }
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

