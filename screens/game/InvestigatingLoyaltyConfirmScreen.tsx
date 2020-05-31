import React, {useState} from 'react';
import {SmallLayout} from "../Layout";
import {Title} from "../../components/Title";
import {StyledButton} from "../../components/StyledButton";
import {View} from "react-native";

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
            <View>
                <Title>Loyalty of player ({selectedPlayer}) is {selectedPlayerLoyality}</Title>
                <StyledButton text={"Dismiss"} onPress={dismiss} disabled={loading}/>
            </View>
        );
    }
}

