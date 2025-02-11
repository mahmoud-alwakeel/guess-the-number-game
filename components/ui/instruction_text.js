import { Text, StyleSheet } from "react-native";

function InstructionText({children, styling}) {
    return (
        <Text style={[styles.instructionText, styling]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 24
    }
});