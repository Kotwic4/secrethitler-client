import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';

export function ChancellorEnactingPolicyScreen({state, sendCommand, userName}) {
    const [top2Cards, setTop2Cards] = useState(state.game.policy_stack.slice(0, 2));
    const pickCards = (withoutCardIndex) => {
        const pickedCards = [...top2Cards];
        pickedCards.splice(withoutCardIndex, 1);

        sendCommand({
            action: "chancellor_enacted_policy",
            enacted: pickedCards
        })
    };
    const cards = top2Cards.map((card, index) => {
        return <Text style={styles.card} onPress={() => pickCards(index)}>
            {card}
        </Text>
    });

    if (state.game.chancellor !== userName) {
        return (
            <SmallLayout>
                <CourierText>Waiting for chancellor({state.game.chancellor}) to pick one policiy</CourierText>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <CourierText>ChancellorEnactingPolicyScreen</CourierText>
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
