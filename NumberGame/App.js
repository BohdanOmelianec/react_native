import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Layout from "./components/ui/Layout";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const startGame = (number) => {
    setUserNumber(number);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setRounds(numberOfRounds)
  };

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setGameIsOver(false);
    setRounds(0);
  };

  let screen = <StartGameScreen startGame={startGame} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber}  onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={rounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <Layout>{screen}</Layout>
    </SafeAreaProvider>
  );
}
