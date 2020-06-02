import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PlayerBox} from "../../components/PlayerBox";
import {Title} from "../../components/Title";
import {getPlayerInfo} from "../../utils/getPlayerInfo";

export function ChancellorNominationScreen({state, sendCommand, userName}) {
    const [loading, setLoading] = useState(false);
    const players = Object.keys(state.game.players)
        .filter(user_name => user_name !== userName)
        .filter(user_name => state.game.players[user_name].is_alive)
        .filter(user_name => state.game.last_government.indexOf(user_name) == -1);
    const nominateChancellor = (user_name) => {
        setLoading(true);
        sendCommand({
            action: "nominate_chancellor",
            player_name: user_name
        });
    };
    const players_boxes = players.map(user_name => {
        const {image, extraRole} = getPlayerInfo(state, user_name);
        return <PlayerBox key={user_name} image={image} extraRole={extraRole} disabled={loading} userName={userName} player={user_name} onPress={() => nominateChancellor(user_name)}/>;
    });

    if (state.game.president !== userName) {
        return (
            <View>
                <Title>Waiting for president ({state.game.president}) to nominate chancellor...</Title>
            </View>
        );
    } else {
        return (
            <View>
                <Title>Nominate chancellor</Title>
                <View style={styles.playersContainer}>{ players_boxes }</View>
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

