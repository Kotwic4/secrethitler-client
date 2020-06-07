import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {Dimensions, StyleSheet} from "react-native";
import {SmallLayout} from "../Layout";
import {ActionScreen} from "./tabs/ActionScreen";
import {BoardScreen} from "./tabs/BoardScreen";
import {PlayersScreen} from "./tabs/PlayersScreen";
import {LastVotingScreen} from "./tabs/LastVotingScreen";

export function TabsScreen({sendCommand, state, userName, onLeaveRoom}) {
    const BoardRoute = () => (
        <BoardScreen state={state}/>
    );
    const PlayersRoute = () => (
        <PlayersScreen state={state} userName={userName} onLeaveRoom={onLeaveRoom}/>
    );
    const LastVoting = () => (
        <LastVotingScreen state={state} userName={userName}/>
    );
    const ActionRoute = () => (
        <ActionScreen
            sendCommand={sendCommand}
            state={state}
            userName={userName}
            onLeaveRoom={onLeaveRoom}
        />
    );
    const initialLayout = { width: Dimensions.get('window').width };
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'board', title: 'Board' },
        { key: 'action', title: 'Action' },
        { key: 'players', title: 'Players' },
        { key: 'vote', title: 'Last Vote' },
    ]);

    const renderScene = SceneMap({
        board: BoardRoute,
        players: PlayersRoute,
        action: ActionRoute,
        vote: LastVoting,
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white', display: "none" }}
            style={styles.tabBar}
            pressColor="blue"
            activeColor="#FBB969"
            inactiveColor="white"
            labelStyle={styles.tabBarLabel}
            getLabelText={({ route }) => route.title}
        />
    );

    return (
        <SmallLayout>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                tabBarPosition="bottom"
            />
        </SmallLayout>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#434343',
        borderRadius: 5,
        height: 40,
        padding: 0
    },
    tabBarLabel: {
        fontSize: 14,
        marginTop: -2,
        fontFamily: 'courier-prime'
    }
});