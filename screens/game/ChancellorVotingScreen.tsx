import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StyledButton} from "../../components/StyledButton";
import {SmallLayout} from "../Layout";
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";

export function ChancellorVotingScreen({state, sendCommand, userName}) {
    const [alreadyVoted, setAlreadyVoted] = useState(false);
    const [vote, setVote] = useState();
    const voteForChancellor = (vote) => {
        sendCommand({
            action: "vote_government",
            vote
        });

        setAlreadyVoted(true);
        setVote(vote ? "Yes" : "No");
    };
    const getVote = (player) => {
        return state.game.players[player].vote;
    };
    const players = Object.keys(state.game.players);
    const players_boxes = players.map(user_name => {
        return <PlayerBox userName={userName} player={user_name} vote={getVote(user_name)}/>;
    });

    if (alreadyVoted) {
        return (
            <SmallLayout>
                <Title> Your vote is ({vote}). Waiting for other players to vote...</Title>
                <View style={styles.playersContainer}>
                    {players_boxes}
                </View>
            </SmallLayout>
        );
    } else {
        return (
            <View>
                <Title>Vote for {state.game.chancellor}</Title>
                <View>
                    <StyledButton text="YES" onPress={() => voteForChancellor(true)} />
                    <View style={{marginTop: 10}}>
                        <StyledButton text="NO" onPress={() => voteForChancellor(false)} />
                    </View>
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
    }
});