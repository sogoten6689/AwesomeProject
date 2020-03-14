  import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens/home';
import { BasicCalculatorScreen } from '../screens/basicCalculatorScreen';
import { SuperlativeEquationScreen } from '../screens/superlativeEquationScreen';
import { ResultScreen } from '../screens/result';

const AppMain = createStackNavigator(
  {
    ['homeScreen']: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    ['basicCalculatorScreen']: {
      screen: BasicCalculatorScreen,
      navigationOptions: {
        title: 'Basic Calculator',
      }
    },
    ['superlativeEquationScreen']: SuperlativeEquationScreen,
    ['resultScreen']: ResultScreen
  },
);

const createAppRouter = (container) => {
  return createAppContainer(createSwitchNavigator(
    {
      ['appLoader']: HomeScreen,
      ['app']: container,
    },
    {
      initialRouteName: 'appLoader',
    },
  ));
};

export const Router = createAppRouter(AppMain);
