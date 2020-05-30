import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';

export function ChancellorNominationScreen({state, sendCommand, userName}) {
    const players = filterUsers(state, 'player').filter(user_name => user_name !== userName);
    const nominateChancellor = (user_name) => {
        sendCommand({
            action: "nominate_chancellor",
            player_name: user_name
        });
    };
    const players_boxes = players.map(user_name => {
        return (
            <Text style={styles.user} onPress={() => nominateChancellor(user_name)}>
                {user_name}
            </Text>
        );
    });

    if (state.game.president !== userName) {
        return (
            <SmallLayout>
                <CourierText>Waiting for president({state.game.president}) to nominate chancellor</CourierText>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <CourierText>ChancellorNominationScreen</CourierText>
                { players_boxes }
            </SmallLayout>
        );
    }
}

const styles = StyleSheet.create({
    user: {
        backgroundColor: "yellow",
        marginBottom: 10,
        padding: 10
    }
});

