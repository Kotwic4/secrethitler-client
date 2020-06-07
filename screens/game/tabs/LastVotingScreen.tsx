import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PlayerBox} from "../../../components/PlayerBox";
import {Title} from "../../../components/Title";
import {getPlayerInfo} from "../../../utils/getPlayerInfo";

export function LastVotingScreen({state, userName}) {
    const getVote = (player) => {
        return state.game.players[player].vote;
    };
    const players = Object.keys(state.game.players)
        .filter(user_name => state.game.players[user_name].is_alive);
    const players_boxes = players.map(user_name => {
        const {extraRole} = getPlayerInfo(state, user_name);
        return <PlayerBox key={user_name} extraRole={extraRole} userName={userName} player={user_name}
                          vote={getVote(user_name)}/>;
    });

    if (state.game.state != "voting_government") {
        return (
            <View>
                <Title>Last vote results</Title>
                <View style={styles.playersContainer}>
                    {players_boxes}
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Voting is now taking place</Title>
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
