import React from 'react';
import {Text} from 'react-native';
import {sendCommand} from '../../utils/sendCommand';
import {filterUsers} from '../../utils/filterUsers';
import {ChancellorNominationScreen} from "./ChancellorNominationScreen";
import {ChancellorVotingScreen} from "./ChancellorVotingScreen";
import {PresidentDrawingPoliciesScreen} from "./PresidentDrawingPoliciesScreen";
import {ChancellorEnactingPolicyScreen} from "./ChancellorEnactingPolicyScreen";

export function ActionScreen({state, sendCommand, userName}) {
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

        default:
            return <Text/>
    }
}

