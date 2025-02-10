import {StyleSheet ,View, Text } from "react-native";
import colors from "../../const/colors";
function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({

  container: {
    padding: 12,
    borderWidth: 2,
    borderColor: colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: colors.accent500,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});