import React, {useState} from 'react';
import {JoinRoom} from "./game/JoinScreen";
import {LobbyScreen} from "./game/LobbyScreen";
import {SERVER_URL} from '../constants/Server';
import axios from 'axios'


export default function GameScreen() {
    const [view, setView] = useState('Join');
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');

    const leaveRoom = () => {
        setUserName('');
        setRoomName('');
        setView(('Join'));
    };

    const joinRoom = async (room, username) => {
        const data = {roomCode: room, playerName: username, requestRole: "admin"};
        const response = await axios.post(`${SERVER_URL}/api/room/join`, data);
        const {token, channel} = response.data;
        console.log(token, channel);
        setRoomName(room);
        setUserName(username);
        setView('Lobby')
    };

    switch (view) {
        case 'Join':
            return <JoinRoom
                joinRoom={joinRoom}
            />;
        case 'Lobby':
            return <LobbyScreen
                leaveRoom={leaveRoom}
                roomName={roomName}
                userName={userName}
                admins={[userName]}
            />
    }
}