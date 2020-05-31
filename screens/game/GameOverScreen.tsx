import React from 'react';
import {SmallLayout} from "../Layout";
import {Title} from "../../components/Title";
import {StyledButton} from "../../components/StyledButton";
import {View} from "react-native";

export function GameOverScreen({state, onLeaveRoom}) {

    const winner = state.game.winner;
    return (
        <View>
            <Title>Game was von by {winner}</Title>
            <StyledButton
                text="Leave room"
                onPress={onLeaveRoom}
            />
        </View>
    )
}

