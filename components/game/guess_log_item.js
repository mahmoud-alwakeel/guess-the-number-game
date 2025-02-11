import { View, Text, StyleSheet } from "react-native";
import colors from "../../const/colors";

function GuessLogItem({roundNum, guess}) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNum}</Text>
            <Text>Phone's guess: {guess}</Text>
        </View>
    );
}


export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 12,
        backgroundColor: colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
});