import React, {useState} from 'react';
import {StyledButton} from "../../components/StyledButton";
import {BigLayout} from "../Layout";
import {FormInput} from "../../components/FormInput";
import axios from "axios";
import { Socket } from 'phoenix';
import {SERVER_URL, WEBSOCKET_URL} from '../../constants/Server';

export function JoinRoom({onMutation, onJoin}) {
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');

    const join = async (room, username) => {
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
                console.log("res", res)
                onJoin(res, socket, channel);
            })
            .receive('error', err => console.error(err))
            .receive('timeout', () => console.error('Connection timed out'));
    };

    return (
        <BigLayout>
            <FormInput
                onChangeText={setRoomName}
                placeholder='Room code'
                value={roomName}
            />
            <FormInput
                onChangeText={setUserName}
                placeholder='Username'
                value={userName}
            />
            <StyledButton
                text="Join"
                disabled={roomName.length == 0 || userName.length == 0}
                onPress={() => join(roomName, userName)}
            />
        </BigLayout>
    );
}
