



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator

        sceneContainerStyle={{
            backgroundColor: 'white',
            
        }}
        screenOptions={ ({route}) => ({
            tabBarActiveTintColor: 'green',
            //tabBarActiveBackgroundColor: 'blue',
            tabBarLabelStyle:{
                fontSize: 13
            },
            tabBarStyle:{
                borderColor: 'green',
                elevation: 0,
                borderTopWidth: 0,
            },
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                        break;
                    case 'Tab2Screen':
                        iconName = 'T2'
                        break;
                    case 'StackNavigator':
                        iconName = 'ST'
                        break;    
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
        

        
    >
      {/* <Tab.Screen name="Tab1Screen"     options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={ Tab1Screen } /> */}
      <Tab.Screen name="Tab1Screen"     options={{title: 'Tab1'}} component={ Tab1Screen } />
      <Tab.Screen name="Tab2Screen"     options={{title: 'Tab2'}}component={ Tab2Screen } />
      <Tab.Screen name="StackNavigator" options={{title: 'Stacks'}}component={ StackNavigator } />
      
    </Tab.Navigator>
  );
}