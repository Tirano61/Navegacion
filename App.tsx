import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navegacion/StackNavigator';
import { MenuLateralBasico } from './src/navegacion/MenuLateralBasico';
import { MenuLateral } from './src/navegacion/MenuLateral';
import { Tabs } from './src/navegacion/Tabs';

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App
