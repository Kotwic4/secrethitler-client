import React from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {Title} from "../../components/Title";

const LIBERAL_BOARD = require('../../assets/images/liberal_board3.png');
const LIBERAL = require('../../assets/images/liberal.png');
const FASCIST_BOARD56 = require('../../assets/images/fascist_board1.png');
const FASCIST_BOARD78 = require('../../assets/images/fascist_board2.png');
const FASCIST_BOARD910 = require('../../assets/images/fascist_board3.png');
const FASCIST = require('../../assets/images/fascist.png');

export function BoardScreen({state}) {
    const liberalCards = state.game.enacted_policies.filter(policy => policy === "liberal").length;
    const fascistCards = state.game.enacted_policies.filter(policy => policy === "fascist").length;
    const playersAmount = Object.keys(state.game.players).length;
    let fascistBoard;

    switch(playersAmount) {
        case 5:
        case 6:
            fascistBoard = FASCIST_BOARD56;
            break;

        case 7:
        case 8:
            fascistBoard = FASCIST_BOARD78;
            break;

        case 9:
        case 10:
            fascistBoard = FASCIST_BOARD910;
            break;
    }

    const getBoard = (boardSource, cardSource, amount, realBoardWidth, realBoardHeight, realCardWidth, realCardHeight) => {
        const width = Dimensions.get('screen').width * 0.95;
        const ratio = width/realBoardWidth;
        const cards = (new Array(amount)).fill(0).map((_, index) => {
            const width = realCardWidth * ratio;
            const height = realCardHeight * ratio;
            const top = 27*ratio;
            const left = 30*ratio + width*index + (55*ratio)*index;
            return <Image
                key={index}
                source={cardSource}
                style={[styles.card, {width, height, top, left}]}
                resizeMode="contain"
            />
        });

        return <View style={styles.boardContainer}>
            <Image
                source={boardSource}
                style={[styles.board, {width: width, height: realBoardHeight * ratio}]}
                resizeMode="contain"
            />
            {cards}
        </View>
    };
    return (
        <View>
            <Title>Liberal</Title>
            {getBoard(LIBERAL_BOARD, LIBERAL, liberalCards, 1115, 310, 167, 255)}
            <Title style={styles.title}>Fascist</Title>
            {getBoard(fascistBoard, FASCIST, fascistCards, 1337, 309, 167, 255)}
            <Title style={styles.title}>Failed elections {state.game.failed_elections}/3</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        position: "relative"
    },
    board: {
        borderRadius: 5
    },
    card: {
        position: "absolute",
        borderRadius: 5
    },
    title: {
        marginTop: 40
    }
});