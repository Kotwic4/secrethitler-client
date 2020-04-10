import React, {useState} from 'react';
import {JoinRoom} from "./game/JoinScreen";
import {LobbyScreen} from "./game/LobbyScreen";
import {SERVER_URL, WEBSOCKET_URL} from '../constants/Server';
import axios from 'axios'

import { Socket } from 'phoenix';


export default function GameScreen() {
    const [view, setView] = useState('Join');
    const [userName, setUserName] = useState('');
    const [state, setState] = useState({});
    const [channel, setChannel] = useState();
    const [socket, setSocket] = useState();

    const leaveRoom = () => {
        socket.disconnect();
        setUserName('');
        setState({});
        setView(('Join'));
    };

    const joinRoom = async (room, username) => {
        const data = {roomCode: room, playerName: username, requestRole: "admin"};
        const response = await axios.post(`${SERVER_URL}/api/room/join`, data);
        const {token, channel: channelName} = response.data;

        console.log(`${WEBSOCKET_URL}/socket`);

        const socket = new Socket(`${WEBSOCKET_URL}/socket`);
        // var ws = new WebSocket("wss://hitlar.tk/socket/websocket?vsn=2.0.0");

        socket.onError(e => {
            console.log('Socket failed', e);
        });

        socket.onClose(() => {
            console.log('Socket closed');
        });

        socket.connect();

        const channel = socket.channel(channelName, { token });

        channel.on('mutation', payload => {
            console.log('mutation', payload);
            setState(payload.state);
        });

        channel.onError(e => {
            console.log('channel failed', e);
        });

        channel.onClose(() => {
            console.log('channel closed');
        });

        channel.join()
            .receive('ok', (res) => {
                console.log('joined', res);
                setState(res.state);
                setUserName(res.approved_player_name);
                setSocket(socket);
                setChannel(channel);
                setView('Lobby');
            })
            .receive('error', err => {
                console.error(err);
            })
            .receive('timeout', () => console.error('Connection timed out'));
    };

    switch (view) {
        case 'Join':
            return <JoinRoom
                joinRoom={joinRoom}
            />;
        case 'Lobby':
            return <LobbyScreen
                leaveRoom={leaveRoom}
                state={state}
                userName={userName}
            />
    }
}