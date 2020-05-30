import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';

export function PresidentDrawingPoliciesScreen({state, sendCommand, userName}) {
    const [top3Cards, setTop3Cards] = useState(state.game.policy_stack.slice(0, 3));
    const pickCards = (withoutCardIndex) => {
        const pickedCards = [...top3Cards];
        pickedCards.splice(withoutCardIndex, 1);

        sendCommand({
            action: "president_pick_policies",
            policies: pickedCards,
            veto_request: false
        })
    };
    const cards = top3Cards.map((card, index) => {
        return <Text style={styles.card} onPress={() => pickCards(index)}>
            {card}
        </Text>
    });

    if (state.game.president !== userName) {
        return (
            <SmallLayout>
                <CourierText>Waiting for president({state.game.president}) to draw policies</CourierText>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <CourierText>PresidentDrawingPoliciesScreen</CourierText>
                {cards}
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

// chancellor_enacted_policy
