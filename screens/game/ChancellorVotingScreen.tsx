import React from 'react';
import {Text, View} from 'react-native';
import {StyledButton} from "../../components/StyledButton";
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {sendCommand} from "../../utils/sendCommand";

export function ChancellorVotingScreen({state, channel}) {
    const nominateChancellor = (vote) => {
        sendCommand(channel, {
            action: "vote_government",
            vote
        });
    };

    return (
        <SmallLayout>
            <CourierText>ChancellorVotingScreen</CourierText>
            {state.state === "nominating_chancellor" && <Text>Waiting for chancellor nomination</Text>}
            {state.state === "voting_government" &&
                <View>
                    <Text>Vote for {state.chancellor}</Text>
                    <StyledButton text="YES" onPress={() => nominateChancellor(true)} />
                    <StyledButton text="NO" onPress={() => nominateChancellor(false)} />
                </View>
            }
        </SmallLayout>
    );
}