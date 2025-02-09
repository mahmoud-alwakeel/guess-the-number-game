import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/primary_button";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputField}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        marginHorizontal: 16,
        borderRadius: 8,
        // elevation is for android only
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    inputField: {
        height: 70,
        width: 70,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
