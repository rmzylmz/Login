import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'
import Demo from './src/screens/Demo'

const MainNavigator = createStackNavigator({
  Signup: { screen: Signup },
  Login: { screen: Login },
  Demo: { screen: Demo },
},
  {
    initialRouteName: 'Signup',
  });

const App = createAppContainer(MainNavigator);

export default App;