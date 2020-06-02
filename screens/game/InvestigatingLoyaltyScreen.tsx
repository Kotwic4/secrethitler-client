import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";

export function InvestigatingLoyaltyScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const players = Object.keys(state.game.players)
        .filter(user_name => user_name !== userName)
        .filter(user_name => state.game.players[user_name].is_alive);
    const checkLoyalty = (user_name) => {
        setLoading(true);
        sendCommand({
            action: "request_loyalty_card",
            who: user_name
        });
    };
    const players_boxes = players.map(user_name => {
        return <PlayerBox key={user_name} disabled={loading} userName={userName} player={user_name}
                          onPress={() => checkLoyalty(user_name)}/>;
    });

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to investigate loyalty...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Check player loyalty</Title>
                <View style={styles.playersContainer}>{players_boxes}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playersContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
});

