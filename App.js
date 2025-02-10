import { ImageBackground, StyleSheet, } from 'react-native';
import StartGameScreen from './screens/start_game_screen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizeMode='cover' style={styles.rootScreen}
      imageStyle={styles.image}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  }
});
