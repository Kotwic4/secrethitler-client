export const filterUsers = (state, role) => {
    return Object.values(state.peers.entries).filter(e => e.role == role).map(e => e.player_name);
};