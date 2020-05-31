import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SmallLayout} from "../Layout";
import {filterUsers} from '../../utils/filterUsers';
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";

export function ChancellorNominationScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const players = filterUsers(state, 'player').filter(user_name => user_name !== userName);
    const nominateChancellor = (user_name) => {
        setLoading(true);
        sendCommand({
            action: "nominate_chancellor",
            player_name: user_name
        });
    };
    const players_boxes = players.map(user_name => {
        return <PlayerBox disabled={loading} userName={userName} player={user_name} onPress={() => nominateChancellor(user_name)}/>;
    });

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to nominate chancellor...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Nominate chancellor</Title>
                <View style={styles.playersContainer}>{ players_boxes }</View>
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

