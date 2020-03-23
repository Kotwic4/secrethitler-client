import React, {useState} from 'react';
import {StyledButton} from "../../components/StyledButton";
import {BigLayout} from "../Layout";
import {FormInput} from "../../components/FormInput";


export function JoinRoom({joinRoom}) {
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');

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
                onPress={() => joinRoom(roomName, userName)}
            />
        </BigLayout>
    );
}
