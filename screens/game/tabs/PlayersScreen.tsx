import React from 'react';
import {StyleSheet, View} from "react-native";
import {PlayerBox} from "../../../components/PlayerBox";
import {StyledButton} from "../../../components/StyledButton";
import {getPlayerInfo} from "../../../utils/getPlayerInfo";
import {Title} from "../../../components/Title";

export function PlayersScreen({state, userName, onLeaveRoom}) {
    const players = Object.keys(state.game.players);
    const players_boxes = players.map(user_name => {
        const user = state.game.players[user_name];
        const {image, extraRole} = getPlayerInfo(state, user_name);

        return <PlayerBox key={user_name} userName={userName} image={image} player={user_name} extraRole={extraRole}
                          isAlive={user.is_alive}/>;
    });
    return (
        <View style={styles.container}>
            <Title>Players</Title>
            <View style={styles.playersContainer}>{players_boxes}</View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    text="Leave room"
                    onPress={onLeaveRoom}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    buttonContainer: {
        position: "absolute",
        bottom: 8,
        left: 0,
        width: "100%"
    },
    playersContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
});