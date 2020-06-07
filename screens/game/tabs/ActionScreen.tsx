import React from 'react';
import {Text} from 'react-native';
import {ChancellorNominationScreen} from "../actions/ChancellorNominationScreen";
import {ChancellorVotingScreen} from "../actions/ChancellorVotingScreen";
import {PresidentDrawingPoliciesScreen} from "../actions/PresidentDrawingPoliciesScreen";
import {ChancellorEnactingPolicyScreen} from "../actions/ChancellorEnactingPolicyScreen";
import {ExecutionScreen} from "../actions/ExecutionScreen";
import {PresidentLooksPoliciesScreen} from "../actions/PresidentLooksPoliciesScreen";
import {InvestigatingLoyaltyScreen} from "../actions/InvestigatingLoyaltyScreen";
import {InvestigatingLoyaltyConfirmScreen} from "../actions/InvestigatingLoyaltyConfirmScreen";
import {PresidentPickScreen} from "../actions/PresidentPickScreen";
import {GameOverScreen} from "../actions/GameOverScreen";
import {DeadScreen} from "../actions/DeadScreen";

export function ActionScreen({state, sendCommand, userName, onLeaveRoom}) {
    const isAlive = state.game.players[userName].is_alive;

    if(!isAlive && state.game.state != "game_over"){
        return <DeadScreen onLeaveRoom={onLeaveRoom}/>
    }

    switch (state.game.state) {
        case "nominating_chancellor":
            return <ChancellorNominationScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "voting_government":
            return <ChancellorVotingScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "president_drawing_policies":
            return <PresidentDrawingPoliciesScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "chancellor_enacting_policy":
            return <ChancellorEnactingPolicyScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "executing":
            return <ExecutionScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "dismiss_policies":
            return <PresidentLooksPoliciesScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "investigating_loyalty":
            return <InvestigatingLoyaltyScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "ack_investigating_loyalty":
            return <InvestigatingLoyaltyConfirmScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "president_picking_next_president":
            return <PresidentPickScreen
                state={state}
                sendCommand={sendCommand}
                userName={userName}
            />;

        case "game_over":
            return <GameOverScreen
                state={state}
                onLeaveRoom={onLeaveRoom}
            />;
        default:
            return <Text/>
    }
}

