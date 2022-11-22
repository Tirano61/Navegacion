
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';



export type RootStackParams = {
  HomeScreen   : undefined, 
  Pagina2Screen: undefined, 
  Pagina3Screen: undefined, 
  PersonaScreen: {id: number, nombre: string}, 
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle:{
          elevation: 0,
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen"    options={{title: "Pantalla Inicial"}} component={HomeScreen} />
      <Stack.Screen name="Pagina2Screen" options={{title: "Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title: "Página 3"}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title: "Persona"}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}