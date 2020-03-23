import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CourierText} from "./CourierText";

export function StyledButton({text, onPress, disabled}) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            disabled={disabled}
        >
            <CourierText style={styles.text}>{text}</CourierText>
        </TouchableOpacity>

    );
}

StyledButton.defaultProps = {
    disabled: false
};


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#434343',
        paddingTop: 16,
        paddingRight: 35,
        paddingBottom: 16,
        paddingLeft: 35,
        borderRadius: 20,
        margin: 10,
    },
    text: {
        color: '#FBB969'
    }
});
