import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FriendScreen from "././src/screens/FriendScreen";
import HomeScreen from './src/screens/HomeScreen';
import ProgramScreen from "./src/screens/ProgramScreen";
import CityScreen from "./src/screens/CityScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Friends: FriendScreen,
    Programs: ProgramScreen,
    Cities: CityScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

