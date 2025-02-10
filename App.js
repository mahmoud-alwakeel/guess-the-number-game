import { ImageBackground, StyleSheet, } from 'react-native';
import StartGameScreen from './screens/start_game_screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/game_screen';
export default function App() {

  const [userNumber, setUserNumber] = useState('')
  
  function pickedNumberHandler(pickedNum) {
    setUserNumber(pickedNum);
  }

  let screen = <StartGameScreen onPickNum={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizeMode='cover' style={styles.rootScreen}
      imageStyle={styles.image}>
        {screen}
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
