import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SmallLayout} from "../Layout";
import {filterUsers} from '../../utils/filterUsers';
import {Title} from "../../components/Title";
import {CardBox} from "../../components/CardBox";

export function ChancellorEnactingPolicyScreen({state, sendCommand, userName}) {
    const [top2Cards, setTop2Cards] = useState(state.game.policy_stack.slice(0, 2));
    const [loading, setLoading] = useState(false);
    const pickCards = (withoutCardIndex) => {
        const pickedCard = top2Cards.slice(withoutCardIndex, withoutCardIndex+1)[0];
        setLoading(true);

        sendCommand({
            action: "chancellor_enacted_policy",
            enacted: pickedCard
        });
    };
    const cards = top2Cards.map((card, index) => {
        return <CardBox card={card} disabled={loading} onPress={() => pickCards(index)}/>
    });

    if (state.game.chancellor !== userName) {
        return (
            <SmallLayout>
                <Title>Waiting for chancellor ({state.game.chancellor}) to enact policy...</Title>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <Title>Enact policy</Title>
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
