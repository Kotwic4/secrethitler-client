export const sendCommand = (channel, command) => {
    try {
        channel.push('mutation', command)
            .receive('ok', msg => console.log('COMMAND', msg))
            .receive('error', e => console.error('Failed to send command:', e))
            .receive('timeout', () => console.error('Sending mutation timed out.'));
    } catch (e) {
        console.error('Failed to prepare command for sending:', e);
    }
};