import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ToDoScreen from './src/screens/ToDoScreen';

const navigator = createStackNavigator({
  ToDo: ToDoScreen
}, {
  initialRouteName: 'ToDo',
  defaultNavigationOptions: {
    title: ''
  }
}
);

export default createAppContainer(navigator);
