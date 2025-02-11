import { StyleSheet, View, Text, Alert, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useEffect, useState } from "react";

import Title from "../components/ui/title";
import NumberContainer from "../components/game/number_container";
import PrimaryButton from "../components/ui/primary_button";
import InstructionText from "../components/ui/instruction_text";
import Card from "../components/ui/card";
import GuessLogItem from "../components/game/guess_log_item";

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
    const [guessRounds, setGuessRounds] = useState([]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('No Cheating', 'Do not lie and miss lead the phone', [{ text: "Okay", style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndmNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndmNum);
        setGuessRounds((previousGuessRounds) => [newRndmNum, ...previousGuessRounds ])
    }

    const guessRoundsListLength = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText styling={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-circle-sharp" size={24} color="white" />                        
                        
                        </PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                         <Ionicons name="add-circle" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNum={guessRoundsListLength - itemData.index } guess={itemData.item}/>}
                keyExtractor={(item) => item}
                />
            </View>
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 24
    }
});