import React, {useState} from 'react';
import {JoinRoom} from "./game/JoinScreen";
import {LobbyScreen} from "./game/LobbyScreen";


export default function GameScreen() {
    const [view, setView] = useState('Join');
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');

    const leaveRoom = () => {
        setUserName('');
        setRoomName('');
        setView(('Join'));
    };

    const joinRoom = (room, username) => {
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