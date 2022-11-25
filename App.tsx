import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navegacion/StackNavigator';
// import { MenuLateralBasico } from './src/navegacion/MenuLateralBasico';
import { MenuLateral } from './src/navegacion/MenuLateral';

// import { Tabs } from './src/navegacion/Tabs';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
