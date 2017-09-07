import { Navigation } from "react-native-navigation";
import FirstScreen from './screens/firstScreen';
import GameScreen from './screens/gameScreen';
import Store from './stores'
import Provider from './Provider'

export function registerScreens() {
  Navigation.registerComponent("snakeGame.FirstScreen", () => FirstScreen,Store,Provider);
  Navigation.registerComponent("snakeGame.GameScreen", () => GameScreen,Store,Provider);
}
