import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/primary_button";
import { useState } from "react";
import colors from "../const/colors";

function StartGameScreen({onPickNum}) {

    const [enteredNum, setEnteredNum] = useState('');

    function numInputHandler(enteredText){
        setEnteredNum(enteredText);
    }

    function resetInputHandler() {
        setEnteredNum('')
    }
    
    function confirmInputHandler(){
        const chosenNum = parseInt(enteredNum);
        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert('Invalid Number', 'Numbers should be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        return;
        }
        onPickNum(chosenNum);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputField}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={numInputHandler}
                value={enteredNum}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // default is stretch
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: colors.primary800,
        marginHorizontal: 16,
        borderRadius: 8,
        // elevation is for android only
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    inputField: {
        height: 70,
        width: 70,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
    }
});
