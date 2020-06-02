import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from "../../components/Title";
import {CardBox} from "../../components/CardBox";

export function ChancellorEnactingPolicyScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const pickCards = (withoutCardIndex) => {
        const pickedCard = top2Cards.slice(withoutCardIndex, withoutCardIndex + 1)[0];
        setLoading(true);

        sendCommand({
            action: "chancellor_enacted_policy",
            enacted: pickedCard
        });
    };
    const top2Cards = state.game.policy_stack.slice(0, 2);
    const cards = top2Cards.map((card, index) => {
        return <CardBox key={index} card={card} disabled={loading} onPress={() => pickCards(index)}/>
    });

    if (state.game.chancellor !== userName) {
        return (
            <View>
                <Title>Waiting for chancellor ({state.game.chancellor}) to enact policy...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Enact policy</Title>
                <View style={styles.cardsContainer}>
                    {cards}
                </View>
            </View>
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
