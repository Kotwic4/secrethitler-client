import React from 'react';
import {StyleSheet} from "react-native";
import {CourierText} from "./CourierText";

export function Title({children}) {
    return (
        <CourierText style={styles.title}>{children}</CourierText>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20
    }
});