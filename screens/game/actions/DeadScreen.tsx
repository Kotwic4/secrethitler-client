import React from 'react';
import {Title} from "../../../components/Title";
import {StyledButton} from "../../../components/StyledButton";
import {StyleSheet, View} from "react-native";


export function DeadScreen({onLeaveRoom}) {
    return (
        <View style={styles.container}>
            <Title>You are dead</Title>
            <View style={styles.buttonContainer}>
                <StyledButton
                    text="Leave room"
                    onPress={onLeaveRoom}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 8,
        left: 0,
        width: "100%"
    }
});

