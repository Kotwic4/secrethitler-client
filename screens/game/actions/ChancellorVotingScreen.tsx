import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Title} from "../../../components/Title";

const YA = require('../../../assets/images/ya_card.png');
const NEIN = require('../../../assets/images/nein_card.png');

export function ChancellorVotingScreen({state, sendCommand, userName}) {
    const voteForChancellor = (vote) => {
        sendCommand({
            action: "vote_government",
            vote
        });
    };
    const getVote = (player) => {
        return state.game.players[player].vote;
    };
    const vote = getVote(userName);

    const voteOption = (vote) => (
        <TouchableOpacity onPress={() => voteForChancellor(true)} style={[styles.voteContainer]}>
            <Image style={styles.voteLayer} source={vote ? YA : NEIN}/>
        </TouchableOpacity>
    );

    if (vote != null) {
        return (
            <View>
                <Title>Waiting for other players to vote...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Vote for {state.game.chancellor}</Title>
                <View style={[styles.container]}>
                    {voteOption(true)}
                    {voteOption(false)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playersContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    voteLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    voteContainer: {
        width: 246 / 3,
        height: 361 / 3,
        backgroundColor: "#434343",
        marginBottom: 25,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 5,
        position: "relative",
        overflow: "hidden"
    },

    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
});
