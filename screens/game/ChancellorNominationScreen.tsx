import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {sendCommand} from '../../utils/sendCommand';
import {filterUsers} from '../../utils/filterUsers';

export function ChancellorNominationScreen({state, channel, userName}) {
    const players = filterUsers(state, 'player').filter(user_name => user_name !== userName);
    const players_boxes = players.map(user_name => {
        return (
            <Text style={styles.user} onPress={() => nominateChancellor(user_name)}>
                {user_name}
            </Text>
        );
    });
    const nominateChancellor = (user_name) => {
        sendCommand(channel, {
            action: "nominate_chancellor",
            player_name: user_name
        });
    };

    return (
        <SmallLayout>
            <CourierText>ChancellorNominationScreen</CourierText>
            { players_boxes }
        </SmallLayout>
    );
}

const styles = StyleSheet.create({
    user: {
        backgroundColor: "yellow",
        marginBottom: 10,
        padding: 10
    }
});

