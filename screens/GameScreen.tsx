import React, {useState} from 'react';
import {sendCommand} from '../utils/sendCommand';
import {TabsScreen} from "./game/TabsScreen";
import {LobbyScreen} from "./game/LobbyScreen";
import {JoinRoom} from "./game/JoinScreen";

export default function GameScreen() {
    const [userName, setUserName] = useState('');
    const [state, setState] = useState();
    const [channel, setChannel] = useState();
    const [socket, setSocket] = useState();

    const onMutation = (payload) => {
        setState(payload.state);
        console.log('MUTATION', payload);
    };

    const onLeaveRoom = () => {
        socket.disconnect();
        setChannel(null);
        setSocket(null);
        setUserName('');
        setState(null);
    };

    const onJoin = (payload, socket, channel) => {
        setState(payload.state);
        setUserName(payload.approved_player_name);
        setSocket(socket);
        setChannel(channel);
    };

    const sendCommandPartially = (command) => sendCommand(channel, command);

    if (!socket) {
        return <JoinRoom
            onMutation={onMutation}
            onJoin={onJoin}
        />;
    } else if (state.game.state === "awaiting_players") {
        return <LobbyScreen
            onLeaveRoom={onLeaveRoom}
            sendCommand={sendCommandPartially}
            state={state}
            userName={userName}
        />
    } else {
        return <TabsScreen
            sendCommand={sendCommandPartially}
            state={state}
            userName={userName}
            onLeaveRoom={onLeaveRoom}
        />
    }
}