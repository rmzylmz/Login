import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'


const MainNavigator = createStackNavigator({
  Signup: {screen: Signup},
  Login: {screen: Login},
},
{
  initialRouteName: 'Signup',
});

const App = createAppContainer(MainNavigator);

export default App;