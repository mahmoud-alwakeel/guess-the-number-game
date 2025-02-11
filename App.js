import { ImageBackground, SafeAreaView, StyleSheet, } from 'react-native';
import StartGameScreen from './screens/start_game_screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/game_screen';
import colors  from './const/colors';
import GameOverScreen from './screens/game_over_screen';

export default function App() {

  const [userNumber, setUserNumber] = useState('')
  const [gameOver, setGameOver] = useState(false)
  
  function pickedNumberHandler(pickedNum) {
    setUserNumber(pickedNum);
  }

  let screen = <StartGameScreen onPickNum={pickedNumberHandler}/>

  function gameOverHandler() {
    setGameOver(true)
  }

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (userNumber && gameOver) {
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={[colors.primary800, colors.accent500]} style={styles.rootScreen}>
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
