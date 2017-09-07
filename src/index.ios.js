import { Navigation } from "react-native-navigation";
import { reaction } from "mobx";
import { registerScreens } from "./registerScreen";
import Provider from "./Provider";
import Store from "./stores";
import { observer } from "mobx-react/native";

registerScreens(Store, Provider);

export default class App {
  constructor() {
    console.log(Store);
    reaction(() => Store.nav.route, () => this.startApp(Store.nav.route));
    Store.nav.appInitialized();
  }

  startApp(root) {
    switch (root) {
      case "root":
        Navigation.startSingleScreenApp({
          screen: {
            screen: "snakeGame.FirstScreen",
            title: "FİRST"
          }
        });
        return;
      case "gameScreen":
        Navigation.startSingleScreenApp({
          screen: {
            screen: "snakeGame.GameScreen",
            title: "GameScreen"
          }
        });
        return;
    }
  }
}
