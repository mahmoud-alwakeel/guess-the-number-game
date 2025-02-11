import { StyleSheet, View, Text, Alert } from "react-native";
import Title from "../components/ui/title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/number_container";
import PrimaryButton from "../components/ui/primary_button";

function generateRandomNumber(min, max, exclude) {
    const rndmNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndmNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndmNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('No Cheating', 'Do not lie and miss lead the phone', [{text: "Okay", style: 'cancel'}])
            return;
        }

            if (direction === 'lower') {
                maxBoundary = currentGuess;
            } else {
                minBoundary = currentGuess + 1;
            }
        const newRndmNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndmNum);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <Title>Higher or Lower</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
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