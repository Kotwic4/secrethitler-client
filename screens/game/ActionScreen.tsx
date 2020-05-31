import React from 'react';
import {Text} from 'react-native';
import {ChancellorNominationScreen} from "./ChancellorNominationScreen";
import {ChancellorVotingScreen} from "./ChancellorVotingScreen";
import {PresidentDrawingPoliciesScreen} from "./PresidentDrawingPoliciesScreen";
import {ChancellorEnactingPolicyScreen} from "./ChancellorEnactingPolicyScreen";
import {ExecutionScreen} from "./ExecutionScreen";
import {PresidentLooksPoliciesScreen} from "./PresidentLooksPoliciesScreen";
import {InvestigatingLoyaltyScreen} from "./InvestigatingLoyaltyScreen";
import {InvestigatingLoyaltyConfirmScreen} from "./InvestigatingLoyaltyConfirmScreen";
import {PresidentPickScreen} from "./PresidentPickScreen";
import {GameOverScreen} from "./GameOverScreen";

export function ActionScreen({state, sendCommand, userName, onLeaveRoom}) {
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

