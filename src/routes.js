import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Preload from './components/Preloader';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({Preload, SignIn, SignUp}),
    App: createBottomTabNavigator(
      {Dashboard, New, Profile},
      {
        tabBarOptions: {
          activeTintColor: '#fff',
          style: {
            borderTopColor: 'transparent',
            backgroundColor: '#1b2c4c',
          },
        },
      },
    ),
  }),
);

export default Routes;
