import {StyleSheet, View, Text } from "react-native";

function Title({children}) {

    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

export default Title;

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    padding: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 24,
    marginTop: 24,
  }
});