import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {StyledButton} from "../../components/StyledButton";
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";

export function ChancellorVotingScreen({state, sendCommand}) {
    const [alreadyVoted, setAlreadyVoted] = useState(false);
    const [vote, setVote] = useState();
    const nominateChancellor = (vote) => {
        sendCommand({
            action: "vote_government",
            vote
        });

        setAlreadyVoted(true);
        setVote(vote ? "YES" : "NO");
    };

    if (alreadyVoted) {
        return (
            <SmallLayout>
                <CourierText>ChancellorVotingScreen</CourierText>
                <View>
                    <Text>Waiting for other players to vote. Your vote is ({vote})</Text>
                </View>
            </SmallLayout>
        );
    } else {
        return (
            <SmallLayout>
                <CourierText>ChancellorVotingScreen</CourierText>
                <View>
                    <Text>Vote for {state.game.chancellor}</Text>
                    <StyledButton text="YES" onPress={() => nominateChancellor(true)} />
                    <StyledButton text="NO" onPress={() => nominateChancellor(false)} />
                </View>
            </SmallLayout>
        );
    }
}