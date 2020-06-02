import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CourierText} from "./CourierText";

export function StyledButton({text, onPress, disabled, loading = false}) {
    return (
        <TouchableOpacity
            style={[styles.button, disabled ? styles.buttonDisabled : {}]}
            onPress={onPress}
            disabled={disabled}
        >
            <CourierText style={styles.text}>{loading ? "Loading..." : text}</CourierText>
        </TouchableOpacity>

    );
}

StyledButton.defaultProps = {
    disabled: false
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#434343',
        borderRadius: 5,
        width: "100%",
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonDisabled: {
        opacity: 0.5
    },
    text: {
        color: '#FBB969',
        fontSize: 14
    }
});
