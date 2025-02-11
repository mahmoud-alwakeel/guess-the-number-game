import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/ui/title";
import colors from "../const/colors";
import PrimaryButton from "../components/ui/primary_button";

function GameOverScreen({roundesNum, userNum, onRestartGame}) {
    return (
        <View style={styles.screen}>
            <Title>Game over screen</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed 
                <Text style={styles.highlightText}> {roundesNum} </Text>
                rounds to guess your number
                <Text style={styles.highlightText}> {userNum} </Text>
            </Text>
            <PrimaryButton onPress={onRestartGame}>Start a new Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 24,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: colors.primary500
    },
});
