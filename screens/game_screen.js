import { StyleSheet, View, Text } from "react-native";
import Title from "../components/ui/title";
import { useState } from "react";
import NumberContainer from "../components/game/number_container";

function generateRandomNumber(min, max, exclude) {
    const rndmNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndmNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndmNum;
    }
}

function GameScreen({userNumber}) {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <Title>
                Opponent's guess
            </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        padding: 12,
        color: '#ddb52f',
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#ddb52f',
    }
});