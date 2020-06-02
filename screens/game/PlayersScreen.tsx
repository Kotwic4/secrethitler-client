import React from 'react';
import {StyleSheet, View} from "react-native";
import {PlayerBox} from "../../components/PlayerBox";
import {StyledButton} from "../../components/StyledButton";

const LIBERAL = require('../../assets/images/liberal_role.png');
const FASCIST = require('../../assets/images/fascist_role.png');
const HITLER = require('../../assets/images/hitler_role.png');

export function PlayersScreen({state, userName, onLeaveRoom}) {
    const players = Object.keys(state.game.players);
    const players_boxes = players.map(user_name => {
        const user = state.game.players[user_name];
        let image = null;
        let extraRole = null;

        if (state.game.president === user_name) {
            extraRole = "president";
        } else if (state.game.chancellor === user_name) {
            extraRole = "chancellor";
        }

        switch (user.role) {
            case "liberal":
                image = LIBERAL;
                break;
            case "fascist":
                image = FASCIST;
                break;
            case "hitler":
                image = HITLER;
                break
        }

        return <PlayerBox key={user_name} userName={userName} image={image} player={user_name} extraRole={extraRole}
                          isAlive={user.is_alive}/>;
    });
    return (
        <View style={styles.container}>
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