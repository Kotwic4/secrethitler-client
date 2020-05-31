import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';
import {Title} from "../../components/Title";
import {CardBox} from "../../components/CardBox";

export function PresidentDrawingPoliciesScreen({state, sendCommand, userName}) {
    const [top3Cards, setTop3Cards] = useState(state.game.policy_stack.slice(0, 3));
    const [loading, setLoading] = useState(false);
    const pickCards = (withoutCardIndex) => {
        const pickedCards = [...top3Cards];
        pickedCards.splice(withoutCardIndex, 1);
        setLoading(true);

        sendCommand({
            action: "president_pick_policies",
            policies: pickedCards,
            veto_request: false
        });
    };
    const cards = top3Cards.map((card, index) => {
        return <CardBox card={card} disabled={loading} onPress={() => pickCards(index)}/>
    });

    if (state.game.president !== userName) {
        return (
            <SmallLayout>
                <Title>Waiting for president ({state.game.president}) to draw policies...</Title>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <Title>Draw policy</Title>
                <View style={styles.cardsContainer}>
                    {cards}
                </View>
            </SmallLayout>
        );
    }
}

const styles = StyleSheet.create({
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
});
