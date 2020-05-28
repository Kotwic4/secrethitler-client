import React, {useState} from 'react';
import {JoinRoom} from "./game/JoinScreen";
import {LobbyScreen} from "./game/LobbyScreen";
import {ChancellorNominationScreen} from "./game/ChancellorNominationScreen";
import {ChancellorVotingScreen} from "./game/ChancellorVotingScreen";
import {SERVER_URL, WEBSOCKET_URL} from '../constants/Server';
import { sendCommand } from '../utils/sendCommand';

export default function GameScreen() {
    const [view, setView] = useState('Join');
    const [userName, setUserName] = useState('');
    const [state, setState] = useState({});
    const [channel, setChannel] = useState();
    const [socket, setSocket] = useState();

    const onMutation = (payload) => {
        setState(payload.state);
        console.log('MUTATION', payload);

        if (payload.mutation.action === "start_game") {
            if (payload.state.game.president === payload.player) {
                setView('ChancellorNomination');
            } else {
                setView('ChancellorVoting');
            }
        }
    };

    const onLeaveRoom = () => {
        socket.disconnect();
        setUserName('');
        setState({});
        setView(('Join'));
    };

    const onJoin = (payload, socket, channel) => {
        setState(payload.state);
        setUserName(payload.approved_player_name);
        setSocket(socket);
        setChannel(channel);
        setView('Lobby');
    };

    switch (view) {
        case 'Join':
            return <JoinRoom
                onMutation={onMutation}
                onJoin={onJoin}
            />;
        case 'Lobby':
            return <LobbyScreen
                onLeaveRoom={onLeaveRoom}
                channel={channel}
                state={state}
                userName={userName}
            />
        case 'ChancellorNomination':
            return <ChancellorNominationScreen
                state={state}
                channel={channel}
                userName={userName}
            />
        case 'ChancellorVoting':
            return <ChancellorVotingScreen
                state={state}
                channel={channel}
            />
    }
}