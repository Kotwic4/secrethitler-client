import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {Dimensions, View} from "react-native";
import {SmallLayout} from "../Layout";
import {ActionScreen} from "./ActionScreen";
import {BoardScreen} from "./BoardScreen";

export function TabsScreen({sendCommand, state, userName, onLeaveRoom}) {
    const BoardRoute = () => (
        <BoardScreen state={state}/>
    );
    const PlayersRoute = () => (
        <View style={{ backgroundColor: '#ff4081' }} />
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
    ]);

    const renderScene = SceneMap({
        board: BoardRoute,
        players: PlayersRoute,
        action: ActionRoute,
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white', display: "none" }}
            style={{ backgroundColor: '#434343', borderRadius: 5 }}
            pressColor="blue"
            activeColor="#FBB969"
            inactiveColor="white"
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