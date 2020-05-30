import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StyledButton} from "../../components/StyledButton";
import {SmallLayout} from "../Layout";
import {filterUsers} from '../../utils/filterUsers';
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";

export function LobbyScreen({onLeaveRoom, sendCommand, state, userName}) {
    const roomName = state.room_code;
    const players = filterUsers(state, 'player').map(player => {
        return <PlayerBox player={player} userName={userName}/>
    });
    const startGame = () => sendCommand({action: "start_game"});
    let startButtonText;
    let startButtonDisabled;

    if (players.length < 5) {
        startButtonText = "Waiting for players...";
        startButtonDisabled = true;
    } else if (players > 10) {
        startButtonText = "Waiting for players to leave...";
        startButtonDisabled = true;
    } else {
        startButtonText = "Start game";
        startButtonDisabled = false;
    }

    return (
        <SmallLayout>
            <View style={styles.container}>
                <View>
                    <Title>Room: {roomName}</Title>
                    <View style={styles.playersContainer}>
                        {players}
                    </View>
                </View>
                <View>
                    <StyledButton text={startButtonText} onPress={startGame} disabled={startButtonDisabled} />
                    <View style={styles.leaveButton}>
                        <StyledButton
                            text="Leave room"
                            onPress={onLeaveRoom}
                        />
                    </View>
                </View>
            </View>
        </SmallLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%"
    },
    playersContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    leaveButton: {
        marginTop: 10
    }
});

