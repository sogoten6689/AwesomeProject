  import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../screens/home';
import { BasicCalculatorScreen } from '../screens/basicCalculatorScreen';
import { SuperlativeEquationScreen } from '../screens/superlativeEquationScreen';

const AppMain = createStackNavigator(
  {
    ['Home']: Home,
    ['basicCalculatorScreen']: {
      screen: BasicCalculatorScreen,
      navigationOptions: {
        title: 'Basic Calculator'
      }
    },
    ['superlativeEquationScreen']: SuperlativeEquationScreen
  },
);

const createAppRouter = (container) => {
  return createAppContainer(createSwitchNavigator(
    {
      ['appLoader']: Home,
      ['app']: container,
    },
    {
      initialRouteName: 'appLoader',
    },
  ));
};

export const Router = createAppRouter(AppMain);
