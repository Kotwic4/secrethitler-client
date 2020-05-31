import React, {useState} from 'react';
import {SmallLayout} from "../Layout";
import {Title} from "../../components/Title";
import {StyledButton} from "../../components/StyledButton";

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
            <SmallLayout>
                <Title>Waiting for president ({state.game.president}) to investigate loyalty of player
                    ({selectedPlayer})...</Title>
            </SmallLayout>
        );
    } else {
        const selectedPlayerLoyality = state.game.players[selectedPlayer].role === "liberal" ? "liberal" : "fascists";

        return (
            <SmallLayout>
                <Title>Loyalty of player ({selectedPlayer}) is {selectedPlayerLoyality}</Title>
                <StyledButton text={"Dismiss"} onPress={dismiss} disabled={loading}/>
            </SmallLayout>
        );
    }
}

