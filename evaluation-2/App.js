import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import FlexScreen from "./src/screens/FlexScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3,
    Flex: FlexScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
