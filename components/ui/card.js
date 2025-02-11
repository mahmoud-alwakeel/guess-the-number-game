import { View, StyleSheet } from "react-native";
import colors from "../../const/colors";

function Card({children}){
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        // default is stretch
        alignItems: 'center',
        marginTop: 24,
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
});

