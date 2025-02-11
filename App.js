import { ImageBackground, SafeAreaView, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/start_game_screen';
import GameScreen from './screens/game_screen';
import colors from './const/colors';
import GameOverScreen from './screens/game_over_screen';

export default function App() {

  const [userNumber, setUserNumber] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNum) {
    setUserNumber(pickedNum);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPickNum={pickedNumberHandler} />

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  function onStartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  if (userNumber && gameOver) {
    screen = <GameOverScreen
      userNum={userNumber}
      roundesNum={guessRounds}
      onRestartGame={onStartNewGameHandler} />
  }

  return (
    <LinearGradient
      colors={[colors.primary800, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover' style={styles.rootScreen}
        imageStyle={styles.image}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
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
