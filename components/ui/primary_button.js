import { StyleSheet, View, Text, Pressable } from "react-native";
import colors from "../../const/colors";

function PrimaryButton({ children, onPress }) {
    // function pressHandler() {
    //     console.log('pressed');
    // }

    return (
        <View style={styles.buttonOuter }>
            <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner} 
            onPress={onPress} 
            android_ripple={{ color: colors.primary600 }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>

    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuter: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden', 
    },
    buttonInner: {
        backgroundColor: colors.primary400,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});
