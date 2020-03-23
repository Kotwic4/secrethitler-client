import {TextInput} from "react-native";
import React from "react";

export function FormInput(props) {
    return (
        <TextInput
            style={{
                height: 40,
                borderWidth: 1,
                padding: 10,
                backgroundColor: "#FFF",
                margin: 10,
            }}
            {...props}
        />
    )
}