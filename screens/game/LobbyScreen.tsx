import React from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {StyledButton} from "../../components/StyledButton";
import {SmallLayout} from "../Layout";
import {CourierText} from "../../components/CourierText";
import {filterUsers} from '../../utils/filterUsers';

export function LobbyScreen({onLeaveRoom, sendCommand, state, userName}) {
    const roomName = state.room_code;
    const admins = filterUsers(state, 'admin');
    const players = filterUsers(state, 'player');
    const spectators = filterUsers(state, 'spectator');
    const startGame = () => sendCommand({action: "start_game"});

    return (
        <SmallLayout>
            <CourierText>Room: {roomName}</CourierText>
            <SectionList
                sections={[
                    {title: 'Admins', data: admins},
                    {title: 'Players', data: players},
                    {title: 'Spectators', data: spectators},
                ]}
                renderItem={({item}) =>
                    <CourierText key={item} style={styles.item}>{item} {item == userName ? '(you)' : ''}</CourierText>
                }
                renderSectionHeader={({section}) => <CourierText
                    style={styles.sectionHeader}>{section.title}({section.data.length}):</CourierText>}
            />
            <StyledButton text="START" onPress={startGame}/>
            <StyledButton
                text="Leave Room"
                onPress={onLeaveRoom}
            />
        </SmallLayout>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        // paddingTop: 2,
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 2,
        // fontSize: 14,
        // fontWeight: 'bold',
        // backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        // padding: 10,
        // fontSize: 18,
        // height: 44,
    },
});

