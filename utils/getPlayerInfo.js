const LIBERAL = require('../assets/images/liberal_role.png');
const FASCIST = require('../assets/images/fascist_role.png');
const HITLER = require('../assets/images/hitler_role.png');
const UNKNOWN = require('../assets/images/unknown_role.png');

export const getPlayerInfo = (state, user_name) => {
    const user = state.game.players[user_name];
    let image = null;
    let extraRole = null;

    if (state.game.president === user_name) {
        extraRole = "president";
    } else if (state.game.chancellor === user_name) {
        extraRole = "chancellor";
    }

    switch (user.role) {
        case "liberal":
            image = LIBERAL;
            break;
        case "fascist":
            image = FASCIST;
            break;
        case "hitler":
            image = HITLER;
            break

        default:
            image = UNKNOWN;
    }

    return {image, extraRole};
};