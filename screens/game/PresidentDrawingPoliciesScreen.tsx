import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';

export function PresidentDrawingPoliciesScreen({state, sendCommand, userName}) {
    const top3Cards = state.game.policy_stack.slice(0, 3);
    const cards = top3Cards.map(card => {
        return <Text style={styles.card} onPress={() => drawCard(user_name)}>
            {card}
        </Text>
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
    card: {
        backgroundColor: "yellow",
        marginBottom: 10,
        padding: 10
    }
});

