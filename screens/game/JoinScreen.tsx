import React, {useState} from 'react';
import {StyledButton} from "../../components/StyledButton";
import {BigLayout} from "../Layout";
import {FormInput} from "../../components/FormInput";
import axios from "axios";
import { Socket } from 'phoenix';
import {SERVER_URL, WEBSOCKET_URL} from '../../constants/Server';
import {StyleSheet, View} from "react-native";

export function JoinRoom({onMutation, onJoin}) {
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    const join = async (room, username) => {
        setLoading(true);
        const data = {roomCode: room, playerName: username, requestRole: "player"};
        const response = await axios.post(`${SERVER_URL}/api/room/join`, data);
        const {token, channel: channelName} = response.data;
        const socket = new Socket(`${WEBSOCKET_URL}/socket`);

        socket.onError(e => console.log('Socket failed', e));
        socket.onClose(() => console.log('Socket closed'));
        socket.connect();

        const channel = socket.channel(channelName, { token });

        channel.on('mutation', payload => onMutation(payload));
        channel.onError(e => console.log('channel failed', e));
        channel.onClose(() => console.log('channel closed'));
        channel.join()
            .receive('ok', (res) => {
                onJoin(res, socket, channel);
            })
            .receive('error', err => console.error(err))
            .receive('timeout', () => console.error('Connection timed out'));
    };

    return (
        <BigLayout>
            <View style={styles.container}>
                <FormInput
                    style={styles.input}
                    onChangeText={setRoomName}
                    placeholder='Room code'
                    value={roomName}
                />
                <FormInput
                    style={[styles.input, styles.input2]}
                    onChangeText={setUserName}
                    placeholder='Username'
                    value={userName}
                />
                <View style={styles.button}>
                    <StyledButton
                        text="Join"
                        disabled={roomName.length == 0 || userName.length == 0 || loading}
                        onPress={() => join(roomName, userName)}
                        loading={loading}
                    />
                </View>
            </View>
        </BigLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#434343",
        padding: 10,
        backgroundColor: "white",
        height: 40
    },
    input2: {
        marginTop: 10
    },
    button: {
        width: "100%",
        marginTop: 10
    }
});