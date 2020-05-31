import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SmallLayout} from "../Layout";
import {filterUsers} from '../../utils/filterUsers';
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";

export function ExecutionScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const players = filterUsers(state, 'player').filter(user_name => user_name !== userName);
    const executePlayer = (user_name) => {
        setLoading(true);
        sendCommand({
            action: "execute",
            who: user_name
        });
    };
    const players_boxes = players.map(user_name => {
        return <PlayerBox disabled={loading} userName={userName} player={user_name} onPress={() => executePlayer(user_name)}/>;
    });

    if (state.game.president !== userName) {
        return (
            <SmallLayout>
                <Title>Waiting for president ({state.game.president}) to eliminate other player...</Title>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <Title>Eliminate player</Title>
                <View style={styles.playersContainer}>{ players_boxes }</View>
            </SmallLayout>
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

