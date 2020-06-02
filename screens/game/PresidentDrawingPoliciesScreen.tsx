import React, {useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {Title} from "../../components/Title";
import {CardBox} from "../../components/CardBox";

export function PresidentDrawingPoliciesScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const [veto, setVeto] = useState(false);
    const pickCards = (withoutCardIndex) => {
        const pickedCards = [...top3Cards];
        pickedCards.splice(withoutCardIndex, 1);
        setLoading(true);

        sendCommand({
            action: "president_pick_policies",
            policies: pickedCards,
            veto_request: veto
        });
    };
    const vetoAvailable = state.game.enacted_policies.filter(policy => policy == "fascist").length >= 5;
    const top3Cards = state.game.policy_stack.slice(0, 3);
    const cards = top3Cards.map((card, index) => {
        return <CardBox key={index} card={card} disabled={loading} onPress={() => pickCards(index)}/>
    });

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to dismiss one policy...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Dismiss one policy</Title>
                {vetoAvailable &&
                    <View style={styles.cardsContainer}>
                        <Title>Veto</Title>
                        <Switch value={veto} onValueChange={() => setVeto(!veto)}/>
                    </View>
                }
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
