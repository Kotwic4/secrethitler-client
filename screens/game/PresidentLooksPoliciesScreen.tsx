import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from "../../components/Title";
import {CardBox} from "../../components/CardBox";
import {StyledButton} from "../../components/StyledButton";

export function PresidentLooksPoliciesScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const dismiss = () => {
        setLoading(true);

        sendCommand({
            action: "dismiss_policies",
        });
    };
    const top3Cards = state.game.policy_stack.slice(0, 3);
    const cards = top3Cards.map((card, index) => {
        return <CardBox key={index} card={card} disabled={true}/>
    });

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to look at policies...</Title>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Title>Look at policies</Title>
                <View style={styles.cardsContainer}>
                    {cards}
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton text={"Dismiss"} onPress={dismiss} disabled={loading}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex"
    },
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    buttonContainer: {
        position: "absolute",
        bottom: 8,
        left: 0,
        width: "100%"
    }
});
